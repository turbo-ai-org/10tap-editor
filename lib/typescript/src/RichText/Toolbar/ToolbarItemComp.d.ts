import type { ToolbarItem } from './actions';
import type { EditorBridge } from '../../types';
export declare const ToolbarItemComp: ({ onPress, disabled, active, image, editor, args, customWidth, customIconWidth, customIconHeight, }: ToolbarItem & {
    editor: EditorBridge;
    args: Parameters<ToolbarItem["onPress"]>[0];
    customWidth?: number;
    customIconWidth?: number;
    customIconHeight?: number;
}) => JSX.Element;
//# sourceMappingURL=ToolbarItemComp.d.ts.map