// @ts-ignore - Import for TypeScript types only, not used at runtime to avoid conflicts

import BridgeExtension from './base';
export let BulletListEditorActionType = /*#__PURE__*/function (BulletListEditorActionType) {
  BulletListEditorActionType["ToggleBulletList"] = "toggle-bulletList";
  return BulletListEditorActionType;
}({});
export const BulletListBridge = new BridgeExtension({
  tiptapExtension: undefined,
  tiptapExtensionDeps: [],
  forceName: 'bulletList',
  onBridgeMessage: (editor, message) => {
    if (message.type === BulletListEditorActionType.ToggleBulletList) {
      editor.chain().focus().toggleBulletList().run();
    }
    return false;
  },
  extendEditorInstance: sendBridgeMessage => {
    return {
      toggleBulletList: () => sendBridgeMessage({
        type: BulletListEditorActionType.ToggleBulletList
      })
    };
  },
  extendEditorState: editor => {
    return {
      canToggleBulletList: editor.can().toggleBulletList(),
      isBulletListActive: editor.isActive('bulletList')
    };
  }
});
//# sourceMappingURL=bulletList.js.map