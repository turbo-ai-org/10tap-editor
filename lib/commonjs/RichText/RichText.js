"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RichText = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativeWebview = require("react-native-webview");
var _editorHtml = require("../simpleWebEditor/build/editorHtml");
var _utils = require("./utils");
var _core = require("../bridges/core");
var _misc = require("../utils/misc");
var _utils2 = require("../utils");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const styles = _reactNative.StyleSheet.create({
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

const RichText = ({
  editor,
  onMessage,
  exclusivelyUseCustomOnMessage = true,
  ...props
}) => {
  const [editorHeight, setEditorHeight] = (0, _react.useState)(0);
  const [key, setKey] = (0, _react.useState)('webview');
  const [loaded, setLoaded] = (0, _react.useState)((0, _misc.isFabric)());
  const {
    keyboardHeight,
    isKeyboardUp
  } = (0, _utils2.useKeyboard)();
  const bottomInset = (editor === null || editor === void 0 ? void 0 : editor.safeAreaBottom) ?? 0;
  const lastPadRef = (0, _react.useRef)(0);
  const rafRef = (0, _react.useRef)(null);
  const prevUpRef = (0, _react.useRef)(false);
  const source = editor.DEV ? {
    uri: editor.DEV_SERVER_URL || DEV_SERVER_URL
  } : {
    html: editor.customSource || _editorHtml.editorHtml,
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
    if (type === _core.CoreEditorActionType.DocumentHeight) {
      setEditorHeight(payload);
    }
    (_editor$bridgeExtensi = editor.bridgeExtensions) === null || _editor$bridgeExtensi === void 0 || _editor$bridgeExtensi.forEach(e => {
      e.onEditorMessage && e.onEditorMessage({
        type,
        payload
      }, editor);
    });
  };

  /** Inject once: helpers for bottom inset + caret scroll */
  const ensureWebHelpers = () => {
    var _editor$webviewRef$cu;
    (_editor$webviewRef$cu = editor.webviewRef.current) === null || _editor$webviewRef$cu === void 0 || _editor$webviewRef$cu.injectJavaScript(`
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
  (0, _react.useEffect)(() => {
    var _editor$options;
    ensureWebHelpers();
    const themedToolbarHeight =
    // @ts-ignore – optional chain if fork doesn’t define options
    (editor === null || editor === void 0 || (_editor$options = editor.options) === null || _editor$options === void 0 || (_editor$options = _editor$options.theme) === null || _editor$options === void 0 || (_editor$options = _editor$options.toolbar) === null || _editor$options === void 0 || (_editor$options = _editor$options.toolbarBody) === null || _editor$options === void 0 ? void 0 : _editor$options.height) ?? TOOLBAR_HEIGHT;
    const extra = 8;
    const basePad = Math.max(0, Math.round(themedToolbarHeight + bottomInset + extra));

    // What we want painted at the page bottom
    const desiredPad = Math.max(0, Math.round(_reactNative.Platform.OS === 'ios' ? editor.avoidIosKeyboard ? isKeyboardUp ? keyboardHeight + basePad : 0 : isKeyboardUp ? basePad : 0 : editor.avoidIosKeyboard ? isKeyboardUp ? keyboardHeight + basePad : 0 : isKeyboardUp ? themedToolbarHeight : 0));

    // Ignore tiny jitter
    if (Math.abs(desiredPad - lastPadRef.current) < 2) return;
    lastPadRef.current = desiredPad;

    // Batch updates into a single frame
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      var _editor$webviewRef$cu2;
      (_editor$webviewRef$cu2 = editor.webviewRef.current) === null || _editor$webviewRef$cu2 === void 0 || _editor$webviewRef$cu2.injectJavaScript(`window.__rn_setBottomInset(${desiredPad}); true;`);
      // Important: TenTap threshold stays stable (toolbar + safe area)
      editor.updateScrollThresholdAndMargin(basePad);
    });

    // Scroll once when keyboard opens (down -> up)
    const opened = isKeyboardUp && !prevUpRef.current;
    prevUpRef.current = isKeyboardUp;
    if (opened) {
      var _editor$webviewRef$cu3;
      (_editor$webviewRef$cu3 = editor.webviewRef.current) === null || _editor$webviewRef$cu3 === void 0 || _editor$webviewRef$cu3.injectJavaScript(`
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
  const injectedJavaScript = (0, _react.useMemo)(() => (0, _utils.getInjectedJS)(editor.bridgeExtensions || []), [editor.bridgeExtensions]);

  // Swipe down anywhere to dismiss keyboard (works inside WebView)
  const panResponder = (0, _react.useRef)(_reactNative.PanResponder.create({
    onMoveShouldSetPanResponder: (_evt, g) => g.dy > 10 && Math.abs(g.dx) < Math.abs(g.dy),
    onPanResponderRelease: (_evt, g) => {
      if (g.dy > 50) {
        var _editor$webviewRef$cu4;
        _reactNative.Keyboard.dismiss();
        (_editor$webviewRef$cu4 = editor.webviewRef.current) === null || _editor$webviewRef$cu4 === void 0 || _editor$webviewRef$cu4.injectJavaScript(`
            (function(){ document.activeElement?.blur(); })();
            true;
          `);
      }
    }
  })).current;
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, _extends({
    style: RichTextStyles.fullScreen
  }, panResponder.panHandlers), editor.autofocus && _reactNative.Platform.OS === 'android' && /*#__PURE__*/_react.default.createElement(_reactNative.TextInput, {
    autoFocus: true,
    style: styles.hiddenInput
  }), /*#__PURE__*/_react.default.createElement(_reactNativeWebview.WebView, _extends({
    key: key,
    ref: editor.webviewRef,
    source: source,
    style: [RichTextStyles.fullScreen, {
      display: loaded ? 'flex' : 'none'
    }, editor.theme.webview],
    containerStyle: [editor.theme.webviewContainer, {
      height: editor.dynamicHeight ? editorHeight : undefined
    }]
    // Prevent iOS from adding its own insets that fight our layout
    ,
    contentInsetAdjustmentBehavior: _reactNative.Platform.OS === 'ios' ? 'never' : undefined,
    hideKeyboardAccessoryView: true,
    keyboardDisplayRequiresUserAction: false,
    webviewDebuggingEnabled: __DEV__,
    scrollEnabled: props.scrollEnabled ?? true,
    injectedJavaScript: injectedJavaScript,
    injectedJavaScriptBeforeContentLoaded: (0, _utils.getInjectedJSBeforeContentLoad)(editor),
    onMessage: onWebviewMessage,
    onLoad: e => {
      setLoaded(true);
      if (_reactNative.Platform.OS === 'ios' && key === 'webview') setKey('webview_reloaded');
      props.onLoad && props.onLoad(e);
    }
  }, props)));
};
exports.RichText = RichText;
const RichTextStyles = _reactNative.StyleSheet.create({
  fullScreen: {
    flex: 1
  }
});
//# sourceMappingURL=RichText.js.map