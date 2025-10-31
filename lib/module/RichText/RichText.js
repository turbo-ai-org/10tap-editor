function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { useEffect, useMemo, useState, useRef } from 'react';
import { Platform, StyleSheet, TextInput, Keyboard, View, PanResponder } from 'react-native';
import { WebView } from 'react-native-webview';
import { editorHtml } from '../simpleWebEditor/build/editorHtml';
import { useKeyboard } from '../utils';
import { getInjectedJS, getInjectedJSBeforeContentLoad } from './utils';
import { isFabric } from '../utils/misc';
import { CoreEditorActionType } from '../bridges/core';
const styles = StyleSheet.create({
  hiddenInput: {
    display: 'none',
    width: 0,
    height: 0,
    position: 'absolute',
    flex: 1,
    top: 0,
    left: 0
  }
});
const DEV_SERVER_URL = 'http://localhost:3000';
const TOOLBAR_HEIGHT = 42; // keep in sync with your app toolbar

export const RichText = ({
  editor,
  onMessage,
  exclusivelyUseCustomOnMessage = true,
  ...props
}) => {
  const [editorHeight, setEditorHeight] = useState(0);
  const [key, setKey] = useState('webview');
  const [loaded, setLoaded] = useState(isFabric());
  const {
    keyboardHeight,
    isKeyboardUp
  } = useKeyboard();
  const bottomInset = (editor === null || editor === void 0 ? void 0 : editor.safeAreaBottom) ?? 0;
  const lastPadRef = useRef(0);
  const rafRef = useRef(null);
  const source = editor.DEV ? {
    uri: editor.DEV_SERVER_URL || DEV_SERVER_URL
  } : {
    html: editor.customSource || editorHtml,
    baseUrl: editor.webviewBaseURL
  };
  const onWebviewMessage = event => {
    var _editor$bridgeExtensi;
    onMessage && onMessage(event);
    if (exclusivelyUseCustomOnMessage && onMessage) return;
    const {
      data
    } = event.nativeEvent;
    if (typeof data !== 'string') return; // devtools messages on web
    const {
      type,
      payload
    } = JSON.parse(data);
    if (type === CoreEditorActionType.DocumentHeight) {
      setEditorHeight(payload);
    }
    (_editor$bridgeExtensi = editor.bridgeExtensions) === null || _editor$bridgeExtensi === void 0 || _editor$bridgeExtensi.forEach(e => {
      e.onEditorMessage && e.onEditorMessage({
        type,
        payload
      }, editor);
    });
  };

  /**
   * Inject one-time helper into the web runtime that updates the *scroll container*,
   * not only `.ProseMirror`. We keep it idempotent and safe to re-run.
   */
  const ensureInsetHelper = () => {
    var _editor$webviewRef$cu;
    (_editor$webviewRef$cu = editor.webviewRef.current) === null || _editor$webviewRef$cu === void 0 || _editor$webviewRef$cu.injectJavaScript(`
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
    var _editor$options;
    ensureInsetHelper();
    const themedToolbarHeight =
    // @ts-ignore – optional chain if your fork doesn’t define options
    (editor === null || editor === void 0 || (_editor$options = editor.options) === null || _editor$options === void 0 || (_editor$options = _editor$options.theme) === null || _editor$options === void 0 || (_editor$options = _editor$options.toolbar) === null || _editor$options === void 0 || (_editor$options = _editor$options.toolbarBody) === null || _editor$options === void 0 ? void 0 : _editor$options.height) ?? TOOLBAR_HEIGHT;
    const extra = 8;
    const basePad = Math.max(0, Math.round(themedToolbarHeight + bottomInset + extra));

    // What we actually want painted at the bottom of the page
    const desiredPad = Math.max(0, Math.round(Platform.OS === 'ios' ? editor.avoidIosKeyboard ? isKeyboardUp ? keyboardHeight + basePad : 0 : isKeyboardUp ? basePad : 0 : editor.avoidIosKeyboard ? isKeyboardUp ? keyboardHeight + basePad : 0 : isKeyboardUp ? themedToolbarHeight : 0));

    // Ignore tiny jitter (<2px)
    if (Math.abs(desiredPad - lastPadRef.current) < 2) return;
    lastPadRef.current = desiredPad;

    // Batch into one frame
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      var _editor$webviewRef$cu2;
      (_editor$webviewRef$cu2 = editor.webviewRef.current) === null || _editor$webviewRef$cu2 === void 0 || _editor$webviewRef$cu2.injectJavaScript(`window.__rn_setBottomInset(${desiredPad}); true;`);

      // IMPORTANT: keep threshold stable (toolbar + safe area), not keyboard
      editor.updateScrollThresholdAndMargin(basePad);
    });
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isKeyboardUp, keyboardHeight, bottomInset, editor.avoidIosKeyboard]);
  const injectedJavaScript = useMemo(() => getInjectedJS(editor.bridgeExtensions || []), [editor.bridgeExtensions]);

  // Swipe down anywhere to dismiss keyboard (works inside WebView)
  const panResponder = useRef(PanResponder.create({
    onMoveShouldSetPanResponder: (_evt, g) => g.dy > 10 && Math.abs(g.dx) < Math.abs(g.dy),
    onPanResponderRelease: (_evt, g) => {
      if (g.dy > 50) {
        var _editor$webviewRef$cu3;
        Keyboard.dismiss();
        (_editor$webviewRef$cu3 = editor.webviewRef.current) === null || _editor$webviewRef$cu3 === void 0 || _editor$webviewRef$cu3.injectJavaScript(`
            (function(){ document.activeElement?.blur(); })();
            true;
          `);
      }
    }
  })).current;
  return /*#__PURE__*/React.createElement(View, _extends({
    style: RichTextStyles.fullScreen
  }, panResponder.panHandlers), editor.autofocus && Platform.OS === 'android' && /*#__PURE__*/React.createElement(TextInput, {
    autoFocus: true,
    style: styles.hiddenInput
  }), /*#__PURE__*/React.createElement(WebView, _extends({
    scrollEnabled: props.scrollEnabled ?? true,
    contentInsetAdjustmentBehavior: Platform.OS === 'ios' ? 'never' : undefined,
    key: key,
    style: [RichTextStyles.fullScreen, {
      display: loaded ? 'flex' : 'none'
    }, editor.theme.webview],
    containerStyle: [editor.theme.webviewContainer, {
      height: editor.dynamicHeight ? editorHeight : undefined
    }],
    source: source,
    injectedJavaScript: injectedJavaScript,
    injectedJavaScriptBeforeContentLoaded: getInjectedJSBeforeContentLoad(editor),
    hideKeyboardAccessoryView: true,
    onMessage: onWebviewMessage,
    ref: editor.webviewRef,
    webviewDebuggingEnabled: __DEV__,
    keyboardDisplayRequiresUserAction: false
  }, props, {
    onLoad: e => {
      setLoaded(true);
      // iOS workaround for a stale render path in RNWV
      if (Platform.OS === 'ios' && key === 'webview') {
        setKey('webview_reloaded');
      }
      props.onLoad && props.onLoad(e);
    }
  })));
};
const RichTextStyles = StyleSheet.create({
  fullScreen: {
    flex: 1
  }
});
//# sourceMappingURL=RichText.js.map