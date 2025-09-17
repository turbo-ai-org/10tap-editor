import React, { useEffect } from 'react';
import { TenTapView, useKeyboard } from '@10play/tentap-editor';
import { isFabric } from '../../utils/misc';
export const CustomKeyboardAndroid = ({
  customKeyboard,
  onKeyboardHideAndroid
}) => {
  const {
    keyboardHeight,
    isKeyboardUp
  } = useKeyboard();
  useEffect(() => {
    if (isKeyboardUp) {
      onKeyboardHideAndroid && onKeyboardHideAndroid();
    }
  }, [isKeyboardUp, onKeyboardHideAndroid]);

  // On fabric we want to change keyboard visibility from js side
  // See: https://github.com/10play/10tap-editor/pull/74
  const display = isFabric() ? customKeyboard ? 'flex' : 'none' : undefined;
  return (
    /*#__PURE__*/
    // Keyboard height is not used on native in android
    React.createElement(TenTapView, {
      keyboardHeight: 0,
      style: {
        height: keyboardHeight,
        display
      }
    }, customKeyboard && /*#__PURE__*/React.createElement(customKeyboard.comp, null))
  );
};
//# sourceMappingURL=CustomKeyboard.android.js.map