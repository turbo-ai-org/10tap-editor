"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HistoryEditorActionType = exports.HistoryBridge = void 0;
var _extensionHistory = _interopRequireDefault(require("@tiptap/extension-history"));
var _base = _interopRequireDefault(require("./base"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let HistoryEditorActionType = exports.HistoryEditorActionType = /*#__PURE__*/function (HistoryEditorActionType) {
  HistoryEditorActionType["Undo"] = "undo";
  HistoryEditorActionType["Redo"] = "redo";
  return HistoryEditorActionType;
}({});
const HistoryBridge = exports.HistoryBridge = new _base.default({
  tiptapExtension: _extensionHistory.default,
  onBridgeMessage: (editor, message) => {
    if (message.type === HistoryEditorActionType.Undo) {
      editor.chain().focus().undo().run();
    }
    if (message.type === HistoryEditorActionType.Redo) {
      editor.chain().focus().redo().run();
    }
    return false;
  },
  extendEditorInstance: sendBridgeMessage => {
    const undo = () => sendBridgeMessage({
      type: HistoryEditorActionType.Undo
    });
    const redo = () => sendBridgeMessage({
      type: HistoryEditorActionType.Redo
    });
    return {
      redo,
      undo
    };
  },
  extendEditorState: editor => {
    return {
      canUndo: editor.can().undo(),
      canRedo: editor.can().redo()
    };
  }
});
//# sourceMappingURL=history.js.map