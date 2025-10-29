function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { FlatList, StyleSheet, Platform, View, Appearance, PlatformColor } from 'react-native';
import { useBridgeState } from '../useBridgeState';
import React from 'react';
import { DEFAULT_TOOLBAR_ITEMS, HEADING_ITEMS, ToolbarContext } from './actions';
import { EditLinkBar } from './EditLinkBar';
import { useKeyboard } from '../../utils';
import { ToolbarItemComp } from './ToolbarItemComp';
import { WebToolbar } from './WebToolbar';
import { BlurView } from '@sbaiahmed1/react-native-blur';
export const toolbarStyles = StyleSheet.create({});
export function Toolbar({
  editor,
  hidden = undefined,
  items = DEFAULT_TOOLBAR_ITEMS,
  shouldHideDisabledToolbarItems = false
}) {
  const editorState = useBridgeState(editor);
  const {
    isKeyboardUp
  } = useKeyboard();
  const [toolbarContext, setToolbarContext] = React.useState(ToolbarContext.Main);
  const fallback = Appearance.getColorScheme() === 'dark' ? '#1C1C1E' : '#F2F2F7';
  const test = Appearance.getColorScheme() === 'dark' ? 'rgba(255,255,255,0.06)' // tiny lift in dark mode (like vibrancy)
  : 'rgba(99, 126, 138, 0.39)';
  const hideToolbar = hidden === undefined ? !isKeyboardUp || !editorState.isFocused : hidden;
  const args = {
    editor,
    editorState,
    setToolbarContext,
    toolbarContext
  };
  const filteredItems = shouldHideDisabledToolbarItems ? items.filter(item => !item.disabled(args)) : items;
  switch (toolbarContext) {
    case ToolbarContext.Main:
    case ToolbarContext.Heading:
      if (Platform.OS === 'web') {
        return /*#__PURE__*/React.createElement(WebToolbar, {
          items: toolbarContext === ToolbarContext.Main ? filteredItems : HEADING_ITEMS,
          args: args,
          editor: editor,
          hidden: hidden
        });
      }
      return /*#__PURE__*/React.createElement(BlurView, {
        type: "blur",
        blurType: "systemChromeMaterial",
        blurAmount: 22 // try 22–28 if you need to tune
        ,
        glassTintColor: test,
        glassType: "clear" // slight tint, closer to the keyboard
        ,
        glassOpacity: 0.88 // 0.88–0.92 feels right
        ,
        reducedTransparencyFallbackColor: fallback,
        isInteractive: true,
        style: [hideToolbar ? editor.theme.toolbar.hidden : undefined, {
          overflow: 'hidden',
          borderRadius: 14,
          borderTopWidth: 0,
          borderBottomWidth: 0,
          // Subtle system-like hairline:
          backgroundColor: test,
          borderColor: (PlatformColor === null || PlatformColor === void 0 ? void 0 : PlatformColor('separator')) ?? 'rgba(60,60,67,0.29)'
        }]
      }, /*#__PURE__*/React.createElement(FlatList, {
        data: toolbarContext === ToolbarContext.Main ? filteredItems : HEADING_ITEMS,
        style: {
          backgroundColor: 'transparent',
          flex: 1,
          height: '100%'
        },
        contentContainerStyle: {
          paddingHorizontal: 4,
          alignItems: 'center',
          minHeight: '100%'
        },
        renderItem: ({
          item
        }) => {
          if (item.isDivider) {
            return /*#__PURE__*/React.createElement(View, {
              style: {
                width: 1,
                height: '100%',
                backgroundColor: '#EAEAEA',
                marginHorizontal: 4
              }
            });
          }
          return /*#__PURE__*/React.createElement(ToolbarItemComp, _extends({}, item, {
            args: args,
            editor: editor
          }));
        },
        horizontal: true
      }));
    case ToolbarContext.Link:
      return /*#__PURE__*/React.createElement(EditLinkBar, {
        theme: editor.theme,
        initialLink: editorState.activeLink,
        onBlur: () => {
          if (Platform.OS === 'web') {
            // On web blur is called before onEditLink. This isn't an ideal fix however this is going to be change soon when we
            // add the new api for toolbar where we will have more control. This is a temporary fix for now.
            setTimeout(() => {
              setToolbarContext(ToolbarContext.Main);
            }, 100);
          } else {
            setToolbarContext(ToolbarContext.Main);
          }
        },
        onLinkIconClick: () => {
          setToolbarContext(ToolbarContext.Main);
          editor.focus();
        },
        onEditLink: link => {
          editor.setLink(link);
          editor.focus();
          if (Platform.OS === 'android') {
            // On android we dont want to hide the link input before we finished focus on editor
            // Add here 100ms and we can try to find better solution later
            setTimeout(() => {
              setToolbarContext(ToolbarContext.Main);
            }, 100);
          } else {
            setToolbarContext(ToolbarContext.Main);
          }
        }
      });
  }
}
//# sourceMappingURL=Toolbar.js.map