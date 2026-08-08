import React from 'react';
import type { CustomKeyboardExtension } from './CustomKeyboardExtension';
export interface CustomKeyboardAndroidProps {
    rootRef: React.RefObject<any>;
    onKeyboardHideAndroid?: () => void;
    customKeyboard?: CustomKeyboardExtension;
}
export declare const CustomKeyboardAndroid: ({ customKeyboard, onKeyboardHideAndroid, }: CustomKeyboardAndroidProps) => JSX.Element;
//# sourceMappingURL=CustomKeyboard.android.d.ts.map