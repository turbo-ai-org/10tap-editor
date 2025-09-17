import merge from 'lodash/merge';
export const mergeThemes = (theme1, theme2) => {
  var _theme2$colorKeyboard, _theme2$colorKeyboard2;
  const merged = merge(theme1, theme2);
  const colorModified = !!(theme2 !== null && theme2 !== void 0 && (_theme2$colorKeyboard = theme2.colorKeyboard) !== null && _theme2$colorKeyboard !== void 0 && _theme2$colorKeyboard.colorSelection);
  const highlightModified = !!(theme2 !== null && theme2 !== void 0 && (_theme2$colorKeyboard2 = theme2.colorKeyboard) !== null && _theme2$colorKeyboard2 !== void 0 && _theme2$colorKeyboard2.highlightSelection);
  // We have a special case with colorKeyboard, where if set we do not want default values
  if (colorModified) merged.colorKeyboard.colorSelection = theme2.colorKeyboard.colorSelection;
  if (highlightModified) merged.colorKeyboard.highlightSelection = theme2.colorKeyboard.highlightSelection;
  return merged;
};
//# sourceMappingURL=mergeThemes.js.map