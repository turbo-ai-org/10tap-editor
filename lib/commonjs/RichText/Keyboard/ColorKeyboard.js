"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorKeyboard = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _EditorHelper = require("../EditorHelper");
var _CustomKeyboardExtension = require("./CustomKeyboardExtension");
var _assets = require("../../assets");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const ColorKeyboardComp = () => {
  const editor = (0, _EditorHelper.useRemoteEditorBridge)();
  const activeColor = editor === null || editor === void 0 ? void 0 : editor.getEditorState().activeColor;
  const activeHighlight = editor === null || editor === void 0 ? void 0 : editor.getEditorState().activeHighlight;
  const theme = editor === null || editor === void 0 ? void 0 : editor.theme;
  const setColor = color => {
    if (!_EditorHelper.EditorHelper.editorLastInstance) return;
    if (color) _EditorHelper.EditorHelper.editorLastInstance.setColor(color.toString());else _EditorHelper.EditorHelper.editorLastInstance.unsetColor();
    _EditorHelper.EditorHelper.editorLastInstance.focus();
  };
  const setHighlight = color => {
    if (!_EditorHelper.EditorHelper.editorLastInstance) return;
    if (color) _EditorHelper.EditorHelper.editorLastInstance.setHighlight(color.toString());else _EditorHelper.EditorHelper.editorLastInstance.unsetHighlight();
    _EditorHelper.EditorHelper.editorLastInstance.focus();
  };
  const groupedTextColors = (0, _react.useMemo)(() => groupInChunks((theme === null || theme === void 0 ? void 0 : theme.colorKeyboard.colorSelection) || [], 3), [theme === null || theme === void 0 ? void 0 : theme.colorKeyboard.colorSelection]);
  const groupedHighlightColors = (0, _react.useMemo)(() => groupInChunks((theme === null || theme === void 0 ? void 0 : theme.colorKeyboard.highlightSelection) || [], 3), [theme === null || theme === void 0 ? void 0 : theme.colorKeyboard.highlightSelection]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.ScrollView, {
    style: theme === null || theme === void 0 ? void 0 : theme.colorKeyboard.scrollViewContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: theme === null || theme === void 0 ? void 0 : theme.colorKeyboard.keyboardContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: theme === null || theme === void 0 ? void 0 : theme.colorKeyboard.sectionTitle
  }, "Color"), groupedTextColors.map(colorRow => {
    var _colorRow$;
    return /*#__PURE__*/_react.default.createElement(ColorRow, {
      theme: theme,
      colors: colorRow,
      onPress: setColor,
      activeColor: activeColor,
      key: (_colorRow$ = colorRow[0]) === null || _colorRow$ === void 0 ? void 0 : _colorRow$.name,
      icon: true
    });
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: theme === null || theme === void 0 ? void 0 : theme.colorKeyboard.sectionTitle
  }, "Highlight"), groupedHighlightColors.map(colorRow => {
    var _colorRow$2;
    return /*#__PURE__*/_react.default.createElement(ColorRow, {
      theme: theme,
      colors: colorRow,
      onPress: setHighlight,
      activeColor: activeHighlight,
      key: (_colorRow$2 = colorRow[1]) === null || _colorRow$2 === void 0 ? void 0 : _colorRow$2.name
    });
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: theme === null || theme === void 0 ? void 0 : theme.colorKeyboard.bottomSpacer
  }));
};
const ColorRow = ({
  theme,
  colors,
  onPress,
  activeColor,
  icon
}) => {
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: theme === null || theme === void 0 ? void 0 : theme.colorKeyboard.colorRow
  }, colors.map(color => /*#__PURE__*/_react.default.createElement(ColorButton, {
    key: color.name,
    onPress: () => onPress(color.value),
    color: color,
    isActive: color.value === activeColor || !color.value && !activeColor,
    theme: theme,
    icon: icon
  })));
};
const ColorButton = ({
  theme,
  onPress,
  color,
  isActive,
  icon
}) => /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
  onPress: onPress,
  style: [theme === null || theme === void 0 ? void 0 : theme.colorKeyboard.colorButton, isActive && (theme === null || theme === void 0 ? void 0 : theme.colorKeyboard.activeButton)]
}, icon && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
  style: theme === null || theme === void 0 ? void 0 : theme.colorKeyboard.iconContainer
}, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
  source: _assets.Images.a,
  style: [theme === null || theme === void 0 ? void 0 : theme.colorKeyboard.textIcon, {
    tintColor: color.displayColor || color.value
  }],
  resizeMode: "contain"
})), !icon && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
  style: [theme === null || theme === void 0 ? void 0 : theme.colorKeyboard.iconContainer]
}, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
  style: [theme === null || theme === void 0 ? void 0 : theme.colorKeyboard.highlight, {
    backgroundColor: color.displayColor || color.value
  }]
})), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
  style: theme === null || theme === void 0 ? void 0 : theme.colorKeyboard.colorText
}, color.name));
function groupInChunks(array, chunkSize) {
  let result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}
const ColorKeyboard = exports.ColorKeyboard = new _CustomKeyboardExtension.CustomKeyboardExtension('keyboard.color', ColorKeyboardComp);
//# sourceMappingURL=ColorKeyboard.js.map