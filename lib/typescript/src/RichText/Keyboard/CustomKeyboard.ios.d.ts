import React from 'react';
import { type ColorValue } from 'react-native';
import type { CustomKeyboardExtension } from './CustomKeyboardExtension';
export interface CustomKeyboardIOSProps {
    rootRef: React.RefObject<any>;
    onKeyboardHideAndroid?: () => void;
    customKeyboard?: CustomKeyboardExtension;
    rootBackground?: ColorValue;
}
export declare const CustomKeyboardIOS: ({ rootRef, customKeyboard, rootBackground, }: CustomKeyboardIOSProps) => JSX.Element;
//# sourceMappingURL=CustomKeyboard.ios.d.ts.map