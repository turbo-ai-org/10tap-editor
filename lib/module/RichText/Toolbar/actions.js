import { Keyboard } from 'react-native';
import { Images } from '../../assets';
import { EditorActionType } from '../../types/Actions';
export let ToolbarContext = /*#__PURE__*/function (ToolbarContext) {
  ToolbarContext[ToolbarContext["Main"] = 0] = "Main";
  ToolbarContext[ToolbarContext["Link"] = 1] = "Link";
  ToolbarContext[ToolbarContext["Heading"] = 2] = "Heading";
  return ToolbarContext;
}({});
export const ToolbarItems = {
  ...EditorActionType,
  ToggleH1: 'toggle-h1',
  ToggleH2: 'toggle-h2',
  ToggleH3: 'toggle-h3',
  ToggleH4: 'toggle-h4',
  ToggleH5: 'toggle-h5',
  ToggleH6: 'toggle-h6'
};
export const DEFAULT_TOOLBAR_ITEMS = [{
  onPress: ({
    editor
  }) => () => {
    var _editor$webviewRef;
    Keyboard.dismiss();
    // Also blur the editor
    (_editor$webviewRef = editor.webviewRef) === null || _editor$webviewRef === void 0 || (_editor$webviewRef = _editor$webviewRef.current) === null || _editor$webviewRef === void 0 || _editor$webviewRef.injectJavaScript(`
          document.activeElement?.blur();
          true;
        `);
  },
  active: () => false,
  disabled: () => false,
  image: () => Images.keyboard,
  customWidth: 80,
  customIconWidth: 40,
  customIconHeight: 30
}, {
  isDivider: true
}, {
  onPress: ({
    editor
  }) => () => editor.toggleBold(),
  active: ({
    editorState
  }) => editorState.isBoldActive,
  disabled: ({
    editorState
  }) => !editorState.canToggleBold,
  image: () => Images.bold
}, {
  onPress: ({
    editor
  }) => () => editor.toggleItalic(),
  active: ({
    editorState
  }) => editorState.isItalicActive,
  disabled: ({
    editorState
  }) => !editorState.canToggleItalic,
  image: () => Images.italic
}, {
  onPress: ({
    editor
  }) => () => editor.toggleUnderline(),
  active: ({
    editorState
  }) => editorState.isUnderlineActive,
  disabled: ({
    editorState
  }) => !editorState.canToggleUnderline,
  image: () => Images.underline
}, {
  onPress: ({
    setToolbarContext
  }) => () => setToolbarContext(ToolbarContext.Heading),
  active: () => false,
  disabled: ({
    editorState
  }) => !editorState.canToggleHeading,
  image: () => Images.Aa
}, {
  isDivider: true
}, {
  onPress: ({
    editor
  }) => () => editor.toggleOrderedList(),
  active: ({
    editorState
  }) => editorState.isOrderedListActive,
  disabled: ({
    editorState
  }) => !editorState.canToggleOrderedList,
  image: () => Images.orderedList
}, {
  onPress: ({
    editor
  }) => () => editor.toggleBulletList(),
  active: ({
    editorState
  }) => editorState.isBulletListActive,
  disabled: ({
    editorState
  }) => !editorState.canToggleBulletList,
  image: () => Images.bulletList
}, {
  onPress: ({
    editor
  }) => () => editor.toggleTaskList(),
  active: ({
    editorState
  }) => editorState.isTaskListActive,
  disabled: ({
    editorState
  }) => !editorState.canToggleTaskList,
  image: () => Images.checkList
}];
export const HEADING_ITEMS = [{
  onPress: ({
    setToolbarContext
  }) => () => setToolbarContext(ToolbarContext.Main),
  active: () => false,
  disabled: () => false,
  image: () => Images.close
}, {
  onPress: ({
    editor
  }) => () => editor.toggleHeading(1),
  active: ({
    editorState
  }) => editorState.headingLevel === 1,
  disabled: ({
    editorState
  }) => !editorState.canToggleHeading,
  image: () => Images.h1
}, {
  onPress: ({
    editor
  }) => () => editor.toggleHeading(2),
  active: ({
    editorState
  }) => editorState.headingLevel === 2,
  disabled: ({
    editorState
  }) => !editorState.canToggleHeading,
  image: () => Images.h2
}, {
  onPress: ({
    editor
  }) => () => editor.toggleHeading(3),
  active: ({
    editorState
  }) => editorState.headingLevel === 3,
  disabled: ({
    editorState
  }) => !editorState.canToggleHeading,
  image: () => Images.h3
}, {
  onPress: ({
    editor
  }) => () => editor.toggleHeading(4),
  active: ({
    editorState
  }) => editorState.headingLevel === 4,
  disabled: ({
    editorState
  }) => !editorState.canToggleHeading,
  image: () => Images.h4
}, {
  onPress: ({
    editor
  }) => () => editor.toggleHeading(5),
  active: ({
    editorState
  }) => editorState.headingLevel === 5,
  disabled: ({
    editorState
  }) => !editorState.canToggleHeading,
  image: () => Images.h5
}, {
  onPress: ({
    editor
  }) => () => editor.toggleHeading(6),
  active: ({
    editorState
  }) => editorState.headingLevel === 6,
  disabled: ({
    editorState
  }) => !editorState.canToggleHeading,
  image: () => Images.h6
}];
//# sourceMappingURL=actions.js.map