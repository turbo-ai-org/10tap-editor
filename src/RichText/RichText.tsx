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
  const bottomInset: number = (editor as any)?.safeAreaBottom ?? 0;
  const lastPadRef = useRef(0);
  const rafRef = useRef<number | null>(null);

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
   * Inject one-time helper into the web runtime that updates the *scroll container*,
   * not only `.ProseMirror`. We keep it idempotent and safe to re-run.
   */
  const ensureInsetHelper = () => {
    editor.webviewRef.current?.injectJavaScript(`
    (function () {
      if (window.__rn_setBottomInset) return;
      window.__rn_setBottomInset = function(pad){
        try{
          var target = document.scrollingElement || document.documentElement || document.body;
          if (!target) return true;

          // Only update when pad actually changes
          var prev = target.__rn_pad || 0;
          if (prev === pad) return true;
          target.__rn_pad = pad;

          // Reserve space; make native scroll math respect it
          target.style.paddingBottom = pad + 'px';
          target.style.scrollPaddingBottom = pad + 'px';

          // Also reflect on the editor element (purely visual); avoid extra layout tricks
          var pm = document.querySelector('.ProseMirror');
          if (pm) pm.style.paddingBottom = Math.max(0, pad - 2) + 'px';
        } catch (e) {}
        return true;
      };
    })();
    true;
  `);
  };

  /**
   * Keep WebView bottom padding + TenTap thresholds synced to keyboard + toolbar + safe-area.
   */
  useEffect(() => {
    ensureInsetHelper();

    const themedToolbarHeight =
      // @ts-ignore – optional chain if your fork doesn’t define options
      editor?.options?.theme?.toolbar?.toolbarBody?.height ?? TOOLBAR_HEIGHT;

    const extra = 8;
    const basePad = Math.max(
      0,
      Math.round(themedToolbarHeight + bottomInset + extra)
    );

    // What we actually want painted at the bottom of the page
    const desiredPad = Math.max(
      0,
      Math.round(
        Platform.OS === 'ios'
          ? editor.avoidIosKeyboard
            ? isKeyboardUp
              ? keyboardHeight + basePad
              : 0
            : isKeyboardUp
            ? basePad
            : 0
          : editor.avoidIosKeyboard
          ? isKeyboardUp
            ? keyboardHeight + basePad
            : 0
          : isKeyboardUp
          ? themedToolbarHeight
          : 0
      )
    );

    // Ignore tiny jitter (<2px)
    if (Math.abs(desiredPad - lastPadRef.current) < 2) return;
    lastPadRef.current = desiredPad;

    // Batch into one frame
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      editor.webviewRef.current?.injectJavaScript(
        `window.__rn_setBottomInset(${desiredPad}); true;`
      );

      // IMPORTANT: keep threshold stable (toolbar + safe area), not keyboard
      editor.updateScrollThresholdAndMargin(basePad);
    });

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isKeyboardUp, keyboardHeight, bottomInset, editor.avoidIosKeyboard]);

  const injectedJavaScript = useMemo(
    () => getInjectedJS(editor.bridgeExtensions || []),
    [editor.bridgeExtensions]
  );

  // Swipe down anywhere to dismiss keyboard (works inside WebView)
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_evt, g) =>
        g.dy > 10 && Math.abs(g.dx) < Math.abs(g.dy),
      onPanResponderRelease: (_evt, g) => {
        if (g.dy > 50) {
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
        scrollEnabled={props.scrollEnabled ?? true}
        contentInsetAdjustmentBehavior={
          Platform.OS === 'ios' ? 'never' : undefined
        }
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
          // iOS workaround for a stale render path in RNWV
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
  fullScreen: { flex: 1 },
});
