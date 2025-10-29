"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebToolbar = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _ToolbarItemComp = require("./ToolbarItemComp");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const WebToolbar = ({
  args,
  editor,
  hidden,
  items
}) => {
  if (hidden) return null;
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flexDirection: 'row'
    }
  }, items === null || items === void 0 ? void 0 : items.map((item, i) => /*#__PURE__*/_react.default.createElement(_ToolbarItemComp.ToolbarItemComp, _extends({}, item, {
    args: args,
    editor: editor,
    key: i
  }))));
};
exports.WebToolbar = WebToolbar;
//# sourceMappingURL=WebToolbar.js.map