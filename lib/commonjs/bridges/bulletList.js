"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BulletListEditorActionType = exports.BulletListBridge = void 0;
var _base = _interopRequireDefault(require("./base"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// @ts-ignore - Import for TypeScript types only, not used at runtime to avoid conflicts
let BulletListEditorActionType = exports.BulletListEditorActionType = /*#__PURE__*/function (BulletListEditorActionType) {
  BulletListEditorActionType["ToggleBulletList"] = "toggle-bulletList";
  return BulletListEditorActionType;
}({});
const BulletListBridge = exports.BulletListBridge = new _base.default({
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