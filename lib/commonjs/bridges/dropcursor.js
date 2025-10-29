"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropCursorBridge = void 0;
var _extensionDropcursor = _interopRequireDefault(require("@tiptap/extension-dropcursor"));
var _base = _interopRequireDefault(require("./base"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const DropCursorBridge = exports.DropCursorBridge = new _base.default({
  tiptapExtension: _extensionDropcursor.default
});
//# sourceMappingURL=dropcursor.js.map