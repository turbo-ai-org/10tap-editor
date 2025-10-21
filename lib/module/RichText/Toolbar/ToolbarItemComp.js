import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export const ToolbarItemComp = ({
  onPress,
  disabled,
  active,
  image,
  editor,
  args,
  customWidth,
  customIconWidth,
  customIconHeight
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
  return /*#__PURE__*/React.createElement(TouchableOpacity, {
    onPress: onPress(args),
    disabled: disabled(args),
    style: [editor.theme.toolbar.toolbarButton, customWidth ? {
      width: customWidth
    } : undefined, {
      justifyContent: 'center',
      alignItems: 'center'
    }]
  }, /*#__PURE__*/React.createElement(View, {
    style: [editor.theme.toolbar.iconWrapper, active(args) ? editor.theme.toolbar.iconWrapperActive : undefined, disabled(args) ? editor.theme.toolbar.iconWrapperDisabled : undefined, customIconWidth || customIconHeight ? {
      width: customIconWidth || editor.theme.toolbar.iconWrapper.width,
      height: customIconHeight || editor.theme.toolbar.iconWrapper.height
    } : undefined]
  }, typeof image(args) === 'string' ? /*#__PURE__*/React.createElement(MaterialCommunityIcons, {
    name: image(args),
    size: customIconWidth || editor.theme.toolbar.icon.width || 24,
    color: getTintColor()
  }) : /*#__PURE__*/React.createElement(Image, {
    source: image(args),
    style: [editor.theme.toolbar.icon, active(args) ? editor.theme.toolbar.iconActive : undefined, disabled(args) ? editor.theme.toolbar.iconDisabled : undefined, customIconWidth || customIconHeight ? {
      width: customIconWidth || editor.theme.toolbar.icon.width,
      height: customIconHeight || editor.theme.toolbar.icon.height
    } : undefined],
    resizeMode: "contain",
    tintColor: getTintColor()
  })));
};
//# sourceMappingURL=ToolbarItemComp.js.map