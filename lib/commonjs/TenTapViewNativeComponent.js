"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
var _codegenNativeComponent = _interopRequireDefault(require("react-native/Libraries/Utilities/codegenNativeComponent"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let TenTapView;
const disableCodegen = true;
if (!disableCodegen && (_reactNative.Platform.OS === 'ios' || _reactNative.Platform.OS === 'android')) {
  try {
    const {
      NativeModules
    } = require('react-native');
    // Only export codegenNativeComponent if the TenTapView native module is available
    // This fixes https://github.com/10play/10tap-editor/issues/300#issuecomment-2948843654
    if (NativeModules.TenTapView) {
      if (_reactNative.Platform.OS === 'ios') {
        NativeModules.TenTapView.setBridge();
      }
      TenTapView = (0, _codegenNativeComponent.default)('TenTapView');
    } else {
      TenTapView = _reactNative.View;
    }
  } catch (err) {
    console.warn('Failed to load TenTapView:', err);
    TenTapView = _reactNative.View;
  }
} else {
  TenTapView = _reactNative.View;
}
var _default = exports.default = TenTapView;
//# sourceMappingURL=TenTapViewNativeComponent.js.map