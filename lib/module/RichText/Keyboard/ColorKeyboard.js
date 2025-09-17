import React, { useMemo } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { EditorHelper, useRemoteEditorBridge } from '../EditorHelper';
import { CustomKeyboardExtension } from './CustomKeyboardExtension';
import { Images } from '../../assets';
const ColorKeyboardComp = () => {
  const editor = useRemoteEditorBridge();
  const activeColor = editor === null || editor === void 0 ? void 0 : editor.getEditorState().activeColor;
  const activeHighlight = editor === null || editor === void 0 ? void 0 : editor.getEditorState().activeHighlight;
  const theme = editor === null || editor === void 0 ? void 0 : editor.theme;
  const setColor = color => {
    if (!EditorHelper.editorLastInstance) return;
    if (color) EditorHelper.editorLastInstance.setColor(color.toString());else EditorHelper.editorLastInstance.unsetColor();
    EditorHelper.editorLastInstance.focus();
  };
  const setHighlight = color => {
    if (!EditorHelper.editorLastInstance) return;
    if (color) EditorHelper.editorLastInstance.setHighlight(color.toString());else EditorHelper.editorLastInstance.unsetHighlight();
    EditorHelper.editorLastInstance.focus();
  };
  const groupedTextColors = useMemo(() => groupInChunks((theme === null || theme === void 0 ? void 0 : theme.colorKeyboard.colorSelection) || [], 3), [theme === null || theme === void 0 ? void 0 : theme.colorKeyboard.colorSelection]);
  const groupedHighlightColors = useMemo(() => groupInChunks((theme === null || theme === void 0 ? void 0 : theme.colorKeyboard.highlightSelection) || [], 3), [theme === null || theme === void 0 ? void 0 : theme.colorKeyboard.highlightSelection]);
  return /*#__PURE__*/React.createElement(ScrollView, {
    style: theme === null || theme === void 0 ? void 0 : theme.colorKeyboard.scrollViewContainer
  }, /*#__PURE__*/React.createElement(View, {
    style: theme === null || theme === void 0 ? void 0 : theme.colorKeyboard.keyboardContainer
  }, /*#__PURE__*/React.createElement(Text, {
    style: theme === null || theme === void 0 ? void 0 : theme.colorKeyboard.sectionTitle
  }, "Color"), groupedTextColors.map(colorRow => {
    var _colorRow$;
    return /*#__PURE__*/React.createElement(ColorRow, {
      theme: theme,
      colors: colorRow,
      onPress: setColor,
      activeColor: activeColor,
      key: (_colorRow$ = colorRow[0]) === null || _colorRow$ === void 0 ? void 0 : _colorRow$.name,
      icon: true
    });
  }), /*#__PURE__*/React.createElement(Text, {
    style: theme === null || theme === void 0 ? void 0 : theme.colorKeyboard.sectionTitle
  }, "Highlight"), groupedHighlightColors.map(colorRow => {
    var _colorRow$2;
    return /*#__PURE__*/React.createElement(ColorRow, {
      theme: theme,
      colors: colorRow,
      onPress: setHighlight,
      activeColor: activeHighlight,
      key: (_colorRow$2 = colorRow[1]) === null || _colorRow$2 === void 0 ? void 0 : _colorRow$2.name
    });
  })), /*#__PURE__*/React.createElement(View, {
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
  return /*#__PURE__*/React.createElement(View, {
    style: theme === null || theme === void 0 ? void 0 : theme.colorKeyboard.colorRow
  }, colors.map(color => /*#__PURE__*/React.createElement(ColorButton, {
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
}) => /*#__PURE__*/React.createElement(TouchableOpacity, {
  onPress: onPress,
  style: [theme === null || theme === void 0 ? void 0 : theme.colorKeyboard.colorButton, isActive && (theme === null || theme === void 0 ? void 0 : theme.colorKeyboard.activeButton)]
}, icon && /*#__PURE__*/React.createElement(View, {
  style: theme === null || theme === void 0 ? void 0 : theme.colorKeyboard.iconContainer
}, /*#__PURE__*/React.createElement(Image, {
  source: Images.a,
  style: [theme === null || theme === void 0 ? void 0 : theme.colorKeyboard.textIcon, {
    tintColor: color.displayColor || color.value
  }],
  resizeMode: "contain"
})), !icon && /*#__PURE__*/React.createElement(View, {
  style: [theme === null || theme === void 0 ? void 0 : theme.colorKeyboard.iconContainer]
}, /*#__PURE__*/React.createElement(View, {
  style: [theme === null || theme === void 0 ? void 0 : theme.colorKeyboard.highlight, {
    backgroundColor: color.displayColor || color.value
  }]
})), /*#__PURE__*/React.createElement(Text, {
  style: theme === null || theme === void 0 ? void 0 : theme.colorKeyboard.colorText
}, color.name));
function groupInChunks(array, chunkSize) {
  let result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}
export const ColorKeyboard = new CustomKeyboardExtension('keyboard.color', ColorKeyboardComp);
//# sourceMappingURL=ColorKeyboard.js.map