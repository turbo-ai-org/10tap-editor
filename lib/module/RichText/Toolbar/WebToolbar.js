function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { View } from 'react-native';
import { ToolbarItemComp } from './ToolbarItemComp';
export const WebToolbar = ({
  args,
  editor,
  hidden,
  items
}) => {
  if (hidden) return null;
  return /*#__PURE__*/React.createElement(View, {
    style: {
      flexDirection: 'row'
    }
  }, items === null || items === void 0 ? void 0 : items.map((item, i) => /*#__PURE__*/React.createElement(ToolbarItemComp, _extends({}, item, {
    args: args,
    editor: editor,
    key: i
  }))));
};
//# sourceMappingURL=WebToolbar.js.map