"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderedListEditorActionType = exports.OrderedListBridge = void 0;
var _base = _interopRequireDefault(require("./base"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// @ts-ignore - Import for TypeScript types only, not used at runtime to avoid conflicts
let OrderedListEditorActionType = exports.OrderedListEditorActionType = /*#__PURE__*/function (OrderedListEditorActionType) {
  OrderedListEditorActionType["ToggleOrderedList"] = "toggle-orderedList";
  return OrderedListEditorActionType;
}({});
const OrderedListBridge = exports.OrderedListBridge = new _base.default({
  tiptapExtension: undefined,
  tiptapExtensionDeps: [],
  forceName: 'orderedList',
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