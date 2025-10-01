import React from 'react';
import { Image, TouchableOpacity, View, type ImageStyle } from 'react-native';
import type { ToolbarItem } from './actions';
import type { EditorBridge } from '../../types';

export const ToolbarItemComp = ({
  onPress,
  disabled,
  active,
  image,
  editor,
  args,
  customWidth,
  customIconWidth,
  customIconHeight,
}: ToolbarItem & {
  editor: EditorBridge;
  args: Parameters<ToolbarItem['onPress']>[0];
  customWidth?: number;
  customIconWidth?: number;
  customIconHeight?: number;
}) => {
  // Get the appropriate tint color based on state
  const getTintColor = (): string | undefined => {
    const iconDisabled = editor.theme.toolbar.iconDisabled as ImageStyle | undefined;
    const iconActive = editor.theme.toolbar.iconActive as ImageStyle | undefined;
    const icon = editor.theme.toolbar.icon as ImageStyle | undefined;

    if (disabled(args) && iconDisabled?.tintColor) {
      return iconDisabled.tintColor as string;
    }
    if (active(args) && iconActive?.tintColor) {
      return iconActive.tintColor as string;
    }
    return icon?.tintColor as string | undefined;
  };

  return (
    <TouchableOpacity
      onPress={onPress(args)}
      disabled={disabled(args)}
      style={[
        editor.theme.toolbar.toolbarButton,
        customWidth ? { width: customWidth } : undefined,
      ]}
    >
      <View
        style={[
          editor.theme.toolbar.iconWrapper,
          active(args) ? editor.theme.toolbar.iconWrapperActive : undefined,
          disabled(args) ? editor.theme.toolbar.iconWrapperDisabled : undefined,
          customIconWidth || customIconHeight
            ? {
                width: customIconWidth || (editor.theme.toolbar.iconWrapper as any).width,
                height: customIconHeight || (editor.theme.toolbar.iconWrapper as any).height,
              }
            : undefined,
        ]}
      >
        <Image
          source={image(args)}
          style={[
            editor.theme.toolbar.icon,
            active(args) ? editor.theme.toolbar.iconActive : undefined,
            disabled(args) ? editor.theme.toolbar.iconDisabled : undefined,
            customIconWidth || customIconHeight
              ? {
                  width: customIconWidth || (editor.theme.toolbar.icon as any).width,
                  height: customIconHeight || (editor.theme.toolbar.icon as any).height,
                }
              : undefined,
          ]}
          resizeMode="contain"
          tintColor={getTintColor()}
        />
      </View>
    </TouchableOpacity>
  );
};
