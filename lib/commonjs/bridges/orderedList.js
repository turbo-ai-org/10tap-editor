"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderedListEditorActionType = exports.OrderedListBridge = void 0;
var _extensionListItem = _interopRequireDefault(require("@tiptap/extension-list-item"));
var _extensionOrderedList = _interopRequireDefault(require("@tiptap/extension-ordered-list"));
var _base = _interopRequireDefault(require("./base"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let OrderedListEditorActionType = exports.OrderedListEditorActionType = /*#__PURE__*/function (OrderedListEditorActionType) {
  OrderedListEditorActionType["ToggleOrderedList"] = "toggle-orderedList";
  return OrderedListEditorActionType;
}({});
const OrderedListBridge = exports.OrderedListBridge = new _base.default({
  tiptapExtension: _extensionOrderedList.default,
  tiptapExtensionDeps: [_extensionListItem.default],
  onBridgeMessage: (editor, message) => {
    if (message.type === OrderedListEditorActionType.ToggleOrderedList) {
      editor.chain().focus().toggleOrderedList().run();
    }
    return false;
  },
  extendEditorInstance: sendBridgeMessage => {
    return {
      toggleOrderedList: () => sendBridgeMessage({
        type: OrderedListEditorActionType.ToggleOrderedList
      })
    };
  },
  extendEditorState: editor => {
    return {
      canToggleOrderedList: editor.can().toggleOrderedList(),
      isOrderedListActive: editor.isActive('orderedList')
    };
  }
});
//# sourceMappingURL=orderedList.js.map