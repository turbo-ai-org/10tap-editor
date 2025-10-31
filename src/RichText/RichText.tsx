import React, { useEffect, useMemo, useState, useRef } from 'react';
import {
  Platform,
  StyleSheet,
  TextInput,
  Keyboard,
  View,
  PanResponder,
} from 'react-native';
import {
  WebView,
  type WebViewProps,
  type WebViewMessageEvent,
} from 'react-native-webview';

import { editorHtml } from '../simpleWebEditor/build/editorHtml';

import { type EditorMessage } from '../types/Messaging';
import { useKeyboard } from '../utils';
import type { EditorBridge } from '../types';
import { getInjectedJS, getInjectedJSBeforeContentLoad } from './utils';
import { isFabric } from '../utils/misc';
import { CoreEditorActionType } from '../bridges/core';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface RichTextProps extends WebViewProps {
  editor: EditorBridge;

  /** If true, your custom onMessage runs exclusively and Tentap’s handler won’t. */
  exclusivelyUseCustomOnMessage?: boolean;
}

const styles = StyleSheet.create({
  hiddenInput: {
    display: 'none',
    width: 0,
    height: 0,
    position: 'absolute',
    flex: 1,
    top: 0,
    left: 0,
  },
});

const DEV_SERVER_URL = 'http://localhost:3000';
const TOOLBAR_HEIGHT = 42; // keep in sync with your app toolbar

export const RichText = ({
  editor,
  onMessage,
  exclusivelyUseCustomOnMessage = true,
  ...props
}: RichTextProps) => {
  const [editorHeight, setEditorHeight] = useState(0);
  const [key, setKey] = useState('webview');
  const [loaded, setLoaded] = useState(isFabric());
  const { keyboardHeight, isKeyboardUp } = useKeyboard();
  const insets = useSafeAreaInsets();

  const source: WebViewProps['source'] = editor.DEV
    ? { uri: editor.DEV_SERVER_URL || DEV_SERVER_URL }
    : {
        html: editor.customSource || editorHtml,
        baseUrl: editor.webviewBaseURL,
      };

  const onWebviewMessage = (event: WebViewMessageEvent) => {
    onMessage && onMessage(event);
    if (exclusivelyUseCustomOnMessage && onMessage) return;

    const { data } = event.nativeEvent;
    if (typeof data !== 'string') return; // devtools messages on web
    const { type, payload } = JSON.parse(data) as EditorMessage;
    if (type === CoreEditorActionType.DocumentHeight) {
      setEditorHeight(payload);
    }
    editor.bridgeExtensions?.forEach((e) => {
      e.onEditorMessage && e.onEditorMessage({ type, payload }, editor);
    });
  };

  /**
   * Keep WebView document padding and internal scroll thresholds
   * synced to keyboard + toolbar + safe-area.
   */
  useEffect(() => {
    const setDocBottomPadding = (height: number) => {
      if (!editor.webviewRef.current) return;
      editor.webviewRef.current.injectJavaScript(`
        (function () {
          var doc = document.querySelector('.ProseMirror');
          if (doc) { doc.style.paddingBottom = '${height}px'; }
        })();
        true;
      `);
    };

    // Prefer theme height if your fork passes it down
    const themedToolbarHeight =
      // @ts-ignore – optional chain if your fork doesn’t define options
      editor?.options?.theme?.toolbar?.toolbarBody?.height ?? TOOLBAR_HEIGHT;

    const extra = 8; // small breathing room so caret doesn’t hug toolbar
    const basePad = themedToolbarHeight + insets.bottom + extra;

    // Ensure we always return a cleanup (fixes TS7030)
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    if (Platform.OS === 'ios' && editor.avoidIosKeyboard) {
      const pad = isKeyboardUp ? keyboardHeight + basePad : 0;
      setDocBottomPadding(pad);
      editor.updateScrollThresholdAndMargin(pad);
    } else if (Platform.OS === 'android') {
      if (editor.avoidIosKeyboard) {
        // Manual handling (e.g., adjustNothing) -> we drive padding entirely
        const pad = isKeyboardUp ? keyboardHeight + basePad : 0;
        setDocBottomPadding(pad);
        editor.updateScrollThresholdAndMargin(pad);
      } else {
        // Relying on adjustResize -> still reserve toolbar so caret doesn’t hide
        const pad = isKeyboardUp ? themedToolbarHeight : 0;
        timeoutId = setTimeout(() => {
          setDocBottomPadding(pad);
          editor.updateScrollThresholdAndMargin(pad);
        }, 120); // let resize settle
      }
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [
    editor,
    editor.avoidIosKeyboard,
    insets.bottom,
    isKeyboardUp,
    keyboardHeight,
  ]);

  const injectedJavaScript = useMemo(
    () => getInjectedJS(editor.bridgeExtensions || []),
    [editor.bridgeExtensions]
  );

  // Swipe down anywhere to dismiss keyboard (works inside WebView)
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_evt, gesture) =>
        gesture.dy > 10 && Math.abs(gesture.dx) < Math.abs(gesture.dy),
      onPanResponderRelease: (_evt, gesture) => {
        if (gesture.dy > 50) {
          Keyboard.dismiss();
          editor.webviewRef.current?.injectJavaScript(`
            (function(){ document.activeElement?.blur(); })();
            true;
          `);
        }
      },
    })
  ).current;

  return (
    <View style={RichTextStyles.fullScreen} {...panResponder.panHandlers}>
      {editor.autofocus && Platform.OS === 'android' && (
        <TextInput autoFocus style={styles.hiddenInput} />
      )}
      <WebView
        scrollEnabled={false}
        key={key}
        style={[
          RichTextStyles.fullScreen,
          { display: loaded ? 'flex' : 'none' },
          editor.theme.webview,
        ]}
        containerStyle={[
          editor.theme.webviewContainer,
          { height: editor.dynamicHeight ? editorHeight : undefined },
        ]}
        source={source}
        injectedJavaScript={injectedJavaScript}
        injectedJavaScriptBeforeContentLoaded={getInjectedJSBeforeContentLoad(
          editor
        )}
        hideKeyboardAccessoryView={true}
        onMessage={onWebviewMessage}
        ref={editor.webviewRef}
        webviewDebuggingEnabled={__DEV__}
        keyboardDisplayRequiresUserAction={false}
        {...props}
        onLoad={(e) => {
          setLoaded(true);
          // iOS WebView workaround
          if (Platform.OS === 'ios' && key === 'webview') {
            setKey('webview_reloaded');
          }
          props.onLoad && props.onLoad(e);
        }}
      />
    </View>
  );
};

const RichTextStyles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
});
