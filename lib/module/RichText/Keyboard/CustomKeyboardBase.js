import React, { useCallback, useEffect } from 'react';
import { Platform } from 'react-native';
import { CustomKeyboardAndroid } from './CustomKeyboard.android';
import { CustomKeyboardIOS } from './CustomKeyboard.ios';
import { useBridgeState } from '../useBridgeState';
export const CustomKeyboard = ({
  keyboards,
  activeKeyboardID,
  setActiveKeyboardID,
  rootRef,
  editor,
  rootBackground
}) => {
  const editorState = useBridgeState(editor);
  useEffect(() => {
    if (editorState.isFocused) {
      setActiveKeyboardID(undefined);
    }
  }, [editorState.isFocused, setActiveKeyboardID]);
  const customKeyboard = activeKeyboardID && keyboards.find(k => k.id === activeKeyboardID) || undefined;
  const onKeyboardHideAndroid = useCallback(() => {
    setActiveKeyboardID(undefined);
  }, [setActiveKeyboardID]);
  if (Platform.OS === 'ios') {
    return /*#__PURE__*/React.createElement(CustomKeyboardIOS, {
      rootRef: rootRef,
      customKeyboard: customKeyboard,
      rootBackground: rootBackground || editor.theme.colorKeyboard.keyboardRootColor
    });
  }
  return /*#__PURE__*/React.createElement(CustomKeyboardAndroid, {
    rootRef: rootRef,
    customKeyboard: customKeyboard,
    onKeyboardHideAndroid: onKeyboardHideAndroid
  });
};
//# sourceMappingURL=CustomKeyboardBase.js.map