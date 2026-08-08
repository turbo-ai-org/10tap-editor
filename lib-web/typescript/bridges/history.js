import History from '@tiptap/extension-history';
import BridgeExtension from './base';
export var HistoryEditorActionType;
(function (HistoryEditorActionType) {
    HistoryEditorActionType["Undo"] = "undo";
    HistoryEditorActionType["Redo"] = "redo";
})(HistoryEditorActionType || (HistoryEditorActionType = {}));
export const HistoryBridge = new BridgeExtension({
    tiptapExtension: History,
    onBridgeMessage: (editor, message) => {
        if (message.type === HistoryEditorActionType.Undo) {
            editor.chain().focus().undo().run();
        }
        if (message.type === HistoryEditorActionType.Redo) {
            editor.chain().focus().redo().run();
        }
        return false;
    },
    extendEditorInstance: (sendBridgeMessage) => {
        const undo = () => sendBridgeMessage({ type: HistoryEditorActionType.Undo });
        const redo = () => sendBridgeMessage({ type: HistoryEditorActionType.Redo });
        return {
            redo,
            undo,
        };
    },
    extendEditorState: (editor) => {
        return {
            canUndo: editor.can().undo(),
            canRedo: editor.can().redo(),
        };
    },
});
