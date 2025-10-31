import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  Keyboard,
  PanResponder,
  Platform,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {
  WebView,
  type WebViewMessageEvent,
  type WebViewProps,
} from 'react-native-webview';

import { editorHtml } from '../simpleWebEditor/build/editorHtml';

import type { EditorBridge } from '../types';
import type { EditorMessage } from '../types/Messaging';
import { getInjectedJS, getInjectedJSBeforeContentLoad } from './utils';
import { CoreEditorActionType } from '../bridges/core';
import { isFabric } from '../utils/misc';
import { useKeyboard } from '../utils';

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
  const prevUpRef = useRef(false);

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

  /** Inject once: helpers for bottom inset + caret scroll */
  const ensureWebHelpers = () => {
    editor.webviewRef.current?.injectJavaScript(`
      (function(){
        // bottom inset helper
        if (!window.__rn_setBottomInset) {
          window.__rn_setBottomInset = function(pad){
            try{
              var target = document.scrollingElement || document.documentElement || document.body;
              if (!target) return true;

              var prev = target.__rn_pad || 0;
              if (prev === pad) return true;
              target.__rn_pad = pad;

              target.style.paddingBottom = pad + 'px';
              target.style.scrollPaddingBottom = pad + 'px';

              var pm = document.querySelector('.ProseMirror');
              if (pm) pm.style.paddingBottom = Math.max(0, pad - 2) + 'px';
            } catch(e) {}
            return true;
          };
        }

        // caret scroll helper
        if (!window.__rn_scrollToCaret) {
          window.__rn_scrollToCaret = function(){
            try{
              if (window.editor?.chain) {
                window.editor.chain().focus().scrollIntoView().run();
              } else if (window.editor?.view) {
                var v = window.editor.view;
                v.dispatch(v.state.tr.scrollIntoView());
                v.focus();
              }
              requestAnimationFrame(function(){ window.scrollBy(0, 12); });
            } catch(e) {}
            return true;
          }
        }
      })();
      true;
    `);
  };

  /** Keep page bottom padding + TenTap thresholds in sync */
  useEffect(() => {
    ensureWebHelpers();

    const themedToolbarHeight =
      // @ts-ignore – optional chain if fork doesn’t define options
      editor?.options?.theme?.toolbar?.toolbarBody?.height ?? TOOLBAR_HEIGHT;

    const extra = 8;
    const basePad = Math.max(0, Math.round(themedToolbarHeight + bottomInset + extra));

    // What we want painted at the page bottom
    const desiredPad = Math.max(
      0,
      Math.round(
        Platform.OS === 'ios'
          ? (editor.avoidIosKeyboard
              ? (isKeyboardUp ? keyboardHeight + basePad : 0)
              : (isKeyboardUp ? basePad : 0))
          : (editor.avoidIosKeyboard
              ? (isKeyboardUp ? keyboardHeight + basePad : 0)
              : (isKeyboardUp ? themedToolbarHeight : 0))
      )
    );

    // Ignore tiny jitter
    if (Math.abs(desiredPad - lastPadRef.current) < 2) return;
    lastPadRef.current = desiredPad;

    // Batch updates into a single frame
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      editor.webviewRef.current?.injectJavaScript(
        `window.__rn_setBottomInset(${desiredPad}); true;`
      );
      // Important: TenTap threshold stays stable (toolbar + safe area)
      editor.updateScrollThresholdAndMargin(basePad);
    });

    // Scroll once when keyboard opens (down -> up)
    const opened = isKeyboardUp && !prevUpRef.current;
    prevUpRef.current = isKeyboardUp;
    if (opened) {
      editor.webviewRef.current?.injectJavaScript(`
        setTimeout(function(){ window.__rn_scrollToCaret && window.__rn_scrollToCaret(); }, 80);
        true;
      `);
    }

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
        key={key}
        ref={editor.webviewRef}
        source={source}
        style={[
          RichTextStyles.fullScreen,
          { display: loaded ? 'flex' : 'none' },
          editor.theme.webview,
        ]}
        containerStyle={[
          editor.theme.webviewContainer,
          { height: editor.dynamicHeight ? editorHeight : undefined },
        ]}
        // Prevent iOS from adding its own insets that fight our layout
        contentInsetAdjustmentBehavior={Platform.OS === 'ios' ? 'never' : undefined}
        hideKeyboardAccessoryView
        keyboardDisplayRequiresUserAction={false}
        webviewDebuggingEnabled={__DEV__}
        scrollEnabled={props.scrollEnabled ?? true}
        injectedJavaScript={injectedJavaScript}
        injectedJavaScriptBeforeContentLoaded={getInjectedJSBeforeContentLoad(editor)}
        onMessage={onWebviewMessage}
        onLoad={(e) => {
          setLoaded(true);
          if (Platform.OS === 'ios' && key === 'webview') setKey('webview_reloaded');
          props.onLoad && props.onLoad(e);
        }}
        {...props}
      />
    </View>
  );
};

const RichTextStyles = StyleSheet.create({
  fullScreen: { flex: 1 },
});
