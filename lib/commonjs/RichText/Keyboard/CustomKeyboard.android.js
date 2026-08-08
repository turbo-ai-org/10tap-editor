"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomKeyboardAndroid = void 0;
var _react = _interopRequireWildcard(require("react"));
var _tentapEditor = require("@10play/tentap-editor");
var _misc = require("../../utils/misc");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
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