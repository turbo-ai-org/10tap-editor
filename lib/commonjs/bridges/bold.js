"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoldEditorActionType = exports.BoldBridge = void 0;
var _extensionBold = _interopRequireDefault(require("@tiptap/extension-bold"));
var _base = _interopRequireDefault(require("./base"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
let BoldEditorActionType = exports.BoldEditorActionType = /*#__PURE__*/function (BoldEditorActionType) {
  BoldEditorActionType["ToggleBold"] = "toggle-bold";
  return BoldEditorActionType;
}({});
const BoldBridge = exports.BoldBridge = new _base.default({
  tiptapExtension: _extensionBold.default,
  onBridgeMessage: (editor, message) => {
    if (message.type === BoldEditorActionType.ToggleBold) {
      editor.chain().focus().toggleBold().run();
    }
    return false;
  },
  extendEditorInstance: sendBridgeMessage => {
    return {
      toggleBold: () => sendBridgeMessage({
        type: BoldEditorActionType.ToggleBold
      })
    };
  },
  extendEditorState: editor => {
    return {
      canToggleBold: editor.can().toggleBold(),
      isBoldActive: editor.isActive('bold')
    };
  }
});
//# sourceMappingURL=bold.js.map