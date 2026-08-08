"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomKeyboard = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _CustomKeyboard = require("./CustomKeyboard.android");
var _CustomKeyboard2 = require("./CustomKeyboard.ios");
var _useBridgeState = require("../useBridgeState");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const CustomKeyboard = ({
  keyboards,
  activeKeyboardID,
  setActiveKeyboardID,
  rootRef,
  editor,
  rootBackground
}) => {
  const editorState = (0, _useBridgeState.useBridgeState)(editor);
  (0, _react.useEffect)(() => {
    if (editorState.isFocused) {
      setActiveKeyboardID(undefined);
    }
  }, [editorState.isFocused, setActiveKeyboardID]);
  const customKeyboard = activeKeyboardID && keyboards.find(k => k.id === activeKeyboardID) || undefined;
  const onKeyboardHideAndroid = (0, _react.useCallback)(() => {
    setActiveKeyboardID(undefined);
  }, [setActiveKeyboardID]);
  if (_reactNative.Platform.OS === 'ios') {
    return /*#__PURE__*/_react.default.createElement(_CustomKeyboard2.CustomKeyboardIOS, {
      rootRef: rootRef,
      customKeyboard: customKeyboard,
      rootBackground: rootBackground || editor.theme.colorKeyboard.keyboardRootColor
    });
  }
  return /*#__PURE__*/_react.default.createElement(_CustomKeyboard.CustomKeyboardAndroid, {
    rootRef: rootRef,
    customKeyboard: customKeyboard,
    onKeyboardHideAndroid: onKeyboardHideAndroid
  });
};
exports.CustomKeyboard = CustomKeyboard;
//# sourceMappingURL=CustomKeyboardBase.js.map