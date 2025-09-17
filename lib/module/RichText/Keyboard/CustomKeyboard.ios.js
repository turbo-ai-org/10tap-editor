import React from 'react';
import { processColor } from 'react-native';
import { TenTapView, useKeyboard } from '@10play/tentap-editor';
import { useRefHandle } from '../../utils/useRefHandle';
export const CustomKeyboardIOS = ({
  rootRef,
  customKeyboard,
  rootBackground
}) => {
  const refHandle = useRefHandle(rootRef);
  const {
    keyboardHeight
  } = useKeyboard();
  return /*#__PURE__*/React.createElement(TenTapView, {
    inputTag: customKeyboard ? refHandle : undefined,
    keyboardHeight: keyboardHeight,
    keyboardID: customKeyboard ? customKeyboard.id : undefined,
    rootBackground: processColor(rootBackground)
  });
};
//# sourceMappingURL=CustomKeyboard.ios.js.map