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
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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