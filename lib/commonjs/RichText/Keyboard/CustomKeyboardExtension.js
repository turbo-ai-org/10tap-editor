"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomKeyboardExtension = void 0;
var _reactNative = require("react-native");
class CustomKeyboardExtension {
  constructor(id, comp) {
    this.id = id;
    this.comp = comp;
    this.id = id;
    this.comp = comp;
    _reactNative.AppRegistry.registerComponent(id, () => comp);
  }
}
exports.CustomKeyboardExtension = CustomKeyboardExtension;
//# sourceMappingURL=CustomKeyboardExtension.js.map