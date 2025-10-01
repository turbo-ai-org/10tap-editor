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
}: ToolbarItem & {
  editor: EditorBridge;
  args: Parameters<ToolbarItem['onPress']>[0];
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
      style={[editor.theme.toolbar.toolbarButton]}
    >
      <View
        style={[
          editor.theme.toolbar.iconWrapper,
          active(args) ? editor.theme.toolbar.iconWrapperActive : undefined,
          disabled(args) ? editor.theme.toolbar.iconWrapperDisabled : undefined,
        ]}
      >
        <Image
          source={image(args)}
          style={[
            editor.theme.toolbar.icon,
            active(args) ? editor.theme.toolbar.iconActive : undefined,
            disabled(args) ? editor.theme.toolbar.iconDisabled : undefined,
          ]}
          resizeMode="contain"
          tintColor={getTintColor()}
        />
      </View>
    </TouchableOpacity>
  );
};
