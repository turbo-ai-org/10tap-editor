import { type WebViewProps } from 'react-native-webview';
import type { EditorBridge } from '../types';
interface RichTextProps extends WebViewProps {
    editor: EditorBridge;
    /** If true, your custom onMessage runs exclusively and Tentap’s handler won’t. */
    exclusivelyUseCustomOnMessage?: boolean;
}
export declare const RichText: ({ editor, onMessage, exclusivelyUseCustomOnMessage, ...props }: RichTextProps) => JSX.Element;
export {};
//# sourceMappingURL=RichText.d.ts.map