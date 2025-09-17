"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomKeyboardIOS = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _tentapEditor = require("@10play/tentap-editor");
var _useRefHandle = require("../../utils/useRefHandle");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const CustomKeyboardIOS = ({
  rootRef,
  customKeyboard,
  rootBackground
}) => {
  const refHandle = (0, _useRefHandle.useRefHandle)(rootRef);
  const {
    keyboardHeight
  } = (0, _tentapEditor.useKeyboard)();
  return /*#__PURE__*/_react.default.createElement(_tentapEditor.TenTapView, {
    inputTag: customKeyboard ? refHandle : undefined,
    keyboardHeight: keyboardHeight,
    keyboardID: customKeyboard ? customKeyboard.id : undefined,
    rootBackground: (0, _reactNative.processColor)(rootBackground)
  });
};
exports.CustomKeyboardIOS = CustomKeyboardIOS;
//# sourceMappingURL=CustomKeyboard.ios.js.map