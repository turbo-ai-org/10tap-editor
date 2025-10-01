"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToolbarItemComp = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ToolbarItemComp = ({
  onPress,
  disabled,
  active,
  image,
  editor,
  args
}) => {
  // Get the appropriate tint color based on state
  const getTintColor = () => {
    const iconDisabled = editor.theme.toolbar.iconDisabled;
    const iconActive = editor.theme.toolbar.iconActive;
    const icon = editor.theme.toolbar.icon;
    if (disabled(args) && iconDisabled !== null && iconDisabled !== void 0 && iconDisabled.tintColor) {
      return iconDisabled.tintColor;
    }
    if (active(args) && iconActive !== null && iconActive !== void 0 && iconActive.tintColor) {
      return iconActive.tintColor;
    }
    return icon === null || icon === void 0 ? void 0 : icon.tintColor;
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: onPress(args),
    disabled: disabled(args),
    style: [editor.theme.toolbar.toolbarButton]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [editor.theme.toolbar.iconWrapper, active(args) ? editor.theme.toolbar.iconWrapperActive : undefined, disabled(args) ? editor.theme.toolbar.iconWrapperDisabled : undefined]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: image(args),
    style: [editor.theme.toolbar.icon, active(args) ? editor.theme.toolbar.iconActive : undefined, disabled(args) ? editor.theme.toolbar.iconDisabled : undefined],
    resizeMode: "contain",
    tintColor: getTintColor()
  })));
};
exports.ToolbarItemComp = ToolbarItemComp;
//# sourceMappingURL=ToolbarItemComp.js.map