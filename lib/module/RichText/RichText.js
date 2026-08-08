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

// TODO: make it a prop
const TOOLBAR_HEIGHT = 44;
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
    // on expo-web we sometimes get react-dev messages that come in as objects - so we ignore these
    if (typeof data !== 'string') return;
    // Parse the message sent from the editor
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
  useEffect(() => {
    const setDocBottomPadding = height => {
      if (editor.webviewRef.current) {
        editor.webviewRef.current.injectJavaScript(`
          doc = document.querySelector('.ProseMirror');
          if(doc) doc.style.paddingBottom = '${height}px';
        `);
      }
    };
    if (editor.webviewRef.current && Platform.OS === 'android') {
      // In case the keyboard is up we need to add padding to the bottom of the document
      const paddingThreshold = editor.avoidIosKeyboard && keyboardHeight && isKeyboardUp // avoidIosKeyboard should change to avoidKeyboard because used in android too (v1.0.0)
      ? TOOLBAR_HEIGHT : 0;
      setTimeout(() => {
        setDocBottomPadding(paddingThreshold);
        editor.updateScrollThresholdAndMargin(paddingThreshold);
      }, 200);
    }
    // On iOS we want to control the scroll and not use the scrollview that comes with react-native-webview
    // That's way we can get better exp on scroll and scroll to element when we need to
    if (editor.avoidIosKeyboard && editor.webviewRef.current && Platform.OS === 'ios') {
      if (keyboardHeight) {
        setDocBottomPadding(keyboardHeight + 10);
        editor.updateScrollThresholdAndMargin(keyboardHeight + 10);
      } else {
        setDocBottomPadding(0);
        editor.updateScrollThresholdAndMargin(0);
      }
    }
  }, [editor.avoidIosKeyboard, editor, keyboardHeight, isKeyboardUp]);
  const injectedJavaScript = useMemo(() => getInjectedJS(editor.bridgeExtensions || []), [editor.bridgeExtensions]);

  // Create pan responder for swipe to dismiss keyboard
  const panResponder = useRef(PanResponder.create({
    onMoveShouldSetPanResponder: (_evt, gestureState) => {
      // Only respond if swiping down
      return gestureState.dy > 10 && Math.abs(gestureState.dx) < Math.abs(gestureState.dy);
    },
    onPanResponderRelease: (_evt, gestureState) => {
      // If swiped down more than 50 pixels, dismiss keyboard
      if (gestureState.dy > 50) {
        Keyboard.dismiss();
        if (editor.webviewRef.current) {
          editor.webviewRef.current.injectJavaScript(`
              document.activeElement?.blur();
              true;
            `);
        }
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
    // Propagated Props
    onLoad: e => {
      setLoaded(true);
      // This is a workaround for iOS to make sure the webview is loaded
      // See https://github.com/react-native-webview/react-native-webview/issues/3578
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