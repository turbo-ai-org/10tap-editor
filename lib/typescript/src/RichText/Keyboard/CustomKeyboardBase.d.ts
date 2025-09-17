import React from 'react';
import { type ColorValue } from 'react-native';
import type { CustomKeyboardExtension } from './CustomKeyboardExtension';
import type { EditorBridge } from '../../types';
interface CustomKeyboardProps {
    rootRef: React.RefObject<any>;
    keyboards: CustomKeyboardExtension[];
    setActiveKeyboardID: (id: string | undefined) => void;
    activeKeyboardID?: string;
    rootBackground?: ColorValue;
    editor: EditorBridge;
}
export declare const CustomKeyboard: ({ keyboards, activeKeyboardID, setActiveKeyboardID, rootRef, editor, rootBackground, }: CustomKeyboardProps) => JSX.Element;
export {};
//# sourceMappingURL=CustomKeyboardBase.d.ts.map