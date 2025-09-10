import { UndoRedo } from '@tiptap/extensions';
import BridgeExtension from './base';

type HistoryEditorState = {
  canUndo: boolean;
  canRedo: boolean;
};

type HistoryEditorInstance = {
  undo: () => void;
  redo: () => void;
};

declare module '../types/EditorBridge' {
  interface BridgeState extends HistoryEditorState {}
  interface EditorBridge extends HistoryEditorInstance {}
}

export enum HistoryEditorActionType {
  Undo = 'undo',
  Redo = 'redo',
}

type HistoryMessage =
  | { type: HistoryEditorActionType.Undo; payload?: undefined }
  | { type: HistoryEditorActionType.Redo; payload?: undefined };

export const HistoryBridge = new BridgeExtension<
  HistoryEditorState,
  HistoryEditorInstance,
  HistoryMessage
>({
  tiptapExtension: UndoRedo,

  onBridgeMessage: (editor, message) => {
    switch (message.type) {
      case HistoryEditorActionType.Undo:
        editor.chain().focus().undo().run();
        break;
      case HistoryEditorActionType.Redo:
        editor.chain().focus().redo().run();
        break;
    }
    return false;
  },

  extendEditorInstance: (sendBridgeMessage) => ({
    undo: () => sendBridgeMessage({ type: HistoryEditorActionType.Undo }),
    redo: () => sendBridgeMessage({ type: HistoryEditorActionType.Redo }),
  }),

  extendEditorState: (editor) => ({
    canUndo: editor.can().undo(),
    canRedo: editor.can().redo(),
  }),
});
