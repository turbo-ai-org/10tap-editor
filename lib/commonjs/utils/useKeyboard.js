"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useKeyboard = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const hideEvent = _reactNative.Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide';
const useKeyboard = () => {
  const [isKeyboardUp, setIsKeyboardUp] = _react.default.useState(false);
  const [keyboardHeight, setKeyboardHeight] = _react.default.useState(0);
  (0, _react.useEffect)(() => {
    const willShowSubscription = _reactNative.Keyboard.addListener('keyboardWillShow', () => {
      setIsKeyboardUp(true);
    });
    const didShowSubscription = _reactNative.Keyboard.addListener('keyboardDidShow', e => {
      setIsKeyboardUp(true);
      setKeyboardHeight(e.endCoordinates.height);
    });
    const hideSubscription = _reactNative.Keyboard.addListener(hideEvent, () => {
      setIsKeyboardUp(false);
    });
    return () => {
      willShowSubscription.remove();
      didShowSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
  return {
    isKeyboardUp,
    keyboardHeight
  };
};
exports.useKeyboard = useKeyboard;
//# sourceMappingURL=useKeyboard.js.map