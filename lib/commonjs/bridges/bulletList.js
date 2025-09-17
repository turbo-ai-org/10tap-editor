"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BulletListEditorActionType = exports.BulletListBridge = void 0;
var _extensionListItem = _interopRequireDefault(require("@tiptap/extension-list-item"));
var _extensionBulletList = _interopRequireDefault(require("@tiptap/extension-bullet-list"));
var _base = _interopRequireDefault(require("./base"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let BulletListEditorActionType = exports.BulletListEditorActionType = /*#__PURE__*/function (BulletListEditorActionType) {
  BulletListEditorActionType["ToggleBulletList"] = "toggle-bulletList";
  return BulletListEditorActionType;
}({});
const BulletListBridge = exports.BulletListBridge = new _base.default({
  tiptapExtension: _extensionBulletList.default,
  tiptapExtensionDeps: [_extensionListItem.default],
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