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
   * Keep WebView document padding and internal scroll thresholds
   * synced to keyboard + toolbar + safe-area.
   */
  useEffect(() => {
    var _editor$options;
    const setDocBottomPadding = height => {
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
    (editor === null || editor === void 0 || (_editor$options = editor.options) === null || _editor$options === void 0 || (_editor$options = _editor$options.theme) === null || _editor$options === void 0 || (_editor$options = _editor$options.toolbar) === null || _editor$options === void 0 || (_editor$options = _editor$options.toolbarBody) === null || _editor$options === void 0 ? void 0 : _editor$options.height) ?? TOOLBAR_HEIGHT;
    const extra = 8; // small breathing room so caret doesn’t hug toolbar
    const basePad = themedToolbarHeight + 8 + extra;

    // Ensure we always return a cleanup (fixes TS7030)
    let timeoutId = null;
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
  }, [editor, editor.avoidIosKeyboard, isKeyboardUp, keyboardHeight]);
  const injectedJavaScript = useMemo(() => getInjectedJS(editor.bridgeExtensions || []), [editor.bridgeExtensions]);

  // Swipe down anywhere to dismiss keyboard (works inside WebView)
  const panResponder = useRef(PanResponder.create({
    onMoveShouldSetPanResponder: (_evt, gesture) => gesture.dy > 10 && Math.abs(gesture.dx) < Math.abs(gesture.dy),
    onPanResponderRelease: (_evt, gesture) => {
      if (gesture.dy > 50) {
        var _editor$webviewRef$cu;
        Keyboard.dismiss();
        (_editor$webviewRef$cu = editor.webviewRef.current) === null || _editor$webviewRef$cu === void 0 || _editor$webviewRef$cu.injectJavaScript(`
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
    scrollEnabled: false,
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
      // iOS WebView workaround
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