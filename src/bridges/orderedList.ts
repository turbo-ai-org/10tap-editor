// @ts-ignore - Import for TypeScript types only, not used at runtime to avoid conflicts
import { OrderedList, ListItem } from '@tiptap/extension-list';
import BridgeExtension from './base';

type OrderedListEditorState = {
  isOrderedListActive: boolean;
  canToggleOrderedList: boolean;
};

type OrderedListEditorInstance = {
  toggleOrderedList: () => void;
};

declare module '../types/EditorBridge' {
  interface BridgeState extends OrderedListEditorState {}
  interface EditorBridge extends OrderedListEditorInstance {}
}

export enum OrderedListEditorActionType {
  ToggleOrderedList = 'toggle-orderedList',
}

type OrderedListMessage = {
  type: OrderedListEditorActionType.ToggleOrderedList;
  payload?: undefined;
};

export const OrderedListBridge = new BridgeExtension<
  OrderedListEditorState,
  OrderedListEditorInstance,
  OrderedListMessage
>({
  tiptapExtension: undefined as any,
  tiptapExtensionDeps: [],
  forceName: 'orderedList' as any,
  onBridgeMessage: (editor, message) => {
    if (message.type === OrderedListEditorActionType.ToggleOrderedList) {
      editor.chain().focus().toggleOrderedList().run();
    }

    return false;
  },
  extendEditorInstance: (sendBridgeMessage) => {
    return {
      toggleOrderedList: () =>
        sendBridgeMessage({
          type: OrderedListEditorActionType.ToggleOrderedList,
        }),
    };
  },
  extendEditorState: (editor) => {
    return {
      canToggleOrderedList: editor.can().toggleOrderedList(),
      isOrderedListActive: editor.isActive('orderedList'),
    };
  },
});
