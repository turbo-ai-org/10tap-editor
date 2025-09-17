"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropCursorBridge = void 0;
var _extensionDropcursor = _interopRequireDefault(require("@tiptap/extension-dropcursor"));
var _base = _interopRequireDefault(require("./base"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const DropCursorBridge = exports.DropCursorBridge = new _base.default({
  tiptapExtension: _extensionDropcursor.default
});
//# sourceMappingURL=dropcursor.js.map