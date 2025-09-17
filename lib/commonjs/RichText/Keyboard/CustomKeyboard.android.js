"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomKeyboardAndroid = void 0;
var _react = _interopRequireWildcard(require("react"));
var _tentapEditor = require("@10play/tentap-editor");
var _misc = require("../../utils/misc");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const CustomKeyboardAndroid = ({
  customKeyboard,
  onKeyboardHideAndroid
}) => {
  const {
    keyboardHeight,
    isKeyboardUp
  } = (0, _tentapEditor.useKeyboard)();
  (0, _react.useEffect)(() => {
    if (isKeyboardUp) {
      onKeyboardHideAndroid && onKeyboardHideAndroid();
    }
  }, [isKeyboardUp, onKeyboardHideAndroid]);

  // On fabric we want to change keyboard visibility from js side
  // See: https://github.com/10play/10tap-editor/pull/74
  const display = (0, _misc.isFabric)() ? customKeyboard ? 'flex' : 'none' : undefined;
  return (
    /*#__PURE__*/
    // Keyboard height is not used on native in android
    _react.default.createElement(_tentapEditor.TenTapView, {
      keyboardHeight: 0,
      style: {
        height: keyboardHeight,
        display
      }
    }, customKeyboard && /*#__PURE__*/_react.default.createElement(customKeyboard.comp, null))
  );
};
exports.CustomKeyboardAndroid = CustomKeyboardAndroid;
//# sourceMappingURL=CustomKeyboard.android.js.map