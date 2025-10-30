import {
  FlatList,
  StyleSheet,
  Platform,
  View,
  Appearance,
  PlatformColor,
} from 'react-native';
import { useBridgeState } from '../useBridgeState';
import React from 'react';
import {
  DEFAULT_TOOLBAR_ITEMS,
  HEADING_ITEMS,
  ToolbarContext,
  type ToolbarItem,
} from './actions';
import { EditLinkBar } from './EditLinkBar';
import { useKeyboard } from '../../utils';
import type { EditorBridge } from '../../types';
import { ToolbarItemComp } from './ToolbarItemComp';
import { WebToolbar } from './WebToolbar';
import { BlurView } from '@sbaiahmed1/react-native-blur';

interface ToolbarProps {
  editor: EditorBridge;
  hidden?: boolean;
  items?: ToolbarItem[];
  shouldHideDisabledToolbarItems?: boolean;
}

export const toolbarStyles = StyleSheet.create({});

export function Toolbar({
  editor,
  hidden = undefined,
  items = DEFAULT_TOOLBAR_ITEMS,
  shouldHideDisabledToolbarItems = false,
}: ToolbarProps) {
  const editorState = useBridgeState(editor);
  const { isKeyboardUp } = useKeyboard();
  const [toolbarContext, setToolbarContext] = React.useState<ToolbarContext>(
    ToolbarContext.Main
  );
  const fallback =
    Appearance.getColorScheme() === 'dark' ? '#1C1C1E' : '#F2F2F7';
  const test =
    Appearance.getColorScheme() === 'dark'
      ? '#16161a95' // tiny lift in dark mode (like vibrancy)
      : '#E0E1E4';
  const hideToolbar =
    hidden === undefined ? !isKeyboardUp || !editorState.isFocused : hidden;

  const args = {
    editor,
    editorState,
    setToolbarContext,
    toolbarContext,
  };

  const filteredItems = shouldHideDisabledToolbarItems
    ? items.filter((item) => !item.disabled(args))
    : items;

  switch (toolbarContext) {
    case ToolbarContext.Main:
    case ToolbarContext.Heading:
      if (Platform.OS === 'web') {
        return (
          <WebToolbar
            items={
              toolbarContext === ToolbarContext.Main
                ? filteredItems
                : HEADING_ITEMS
            }
            args={args}
            editor={editor}
            hidden={hidden}
          />
        );
      }
      return (
        <BlurView
          type="blur"
          blurType="systemChromeMaterial"
          blurAmount={22} // try 22–28 if you need to tune
          glassTintColor={test}
          glassType="clear" // slight tint, closer to the keyboard
          glassOpacity={0.88} // 0.88–0.92 feels right
          reducedTransparencyFallbackColor={fallback}
          isInteractive={true}
          style={[
            hideToolbar ? editor.theme.toolbar.hidden : undefined,
            {
              overflow: 'hidden',
              borderRadius: 14,
              borderTopWidth: 0,
              borderBottomWidth: 0,
              // Subtle system-like hairline:
              backgroundColor: test,
              borderColor:
                PlatformColor?.('separator') ?? 'rgba(60,60,67,0.29)',
            },
          ]}
        >
          <FlatList
            data={
              toolbarContext === ToolbarContext.Main
                ? filteredItems
                : HEADING_ITEMS
            }
            style={{
              backgroundColor: 'transparent',
              flex: 1,
              height: '100%',
            }}
            contentContainerStyle={{
              paddingHorizontal: 3,
              alignItems: 'center',
              minHeight: '100%',
            }}
            renderItem={({ item }) => {
              if ((item as any).isDivider) {
                return (
                  <View
                    style={{
                      width: 1,
                      height: 30,
                      backgroundColor:
                        Appearance.getColorScheme() === 'dark'
                          ? 'rgba(255, 255, 255, 0.2)'
                          : 'rgba(0, 0, 0, 0.15)',
                      marginHorizontal: 3,
                      alignSelf: 'center',
                    }}
                  />
                );
              }
              return <ToolbarItemComp {...item} args={args} editor={editor} />;
            }}
            horizontal
          />
        </BlurView>
      );
    case ToolbarContext.Link:
      return (
        <EditLinkBar
          theme={editor.theme}
          initialLink={editorState.activeLink}
          onBlur={() => {
            if (Platform.OS === 'web') {
              // On web blur is called before onEditLink. This isn't an ideal fix however this is going to be change soon when we
              // add the new api for toolbar where we will have more control. This is a temporary fix for now.
              setTimeout(() => {
                setToolbarContext(ToolbarContext.Main);
              }, 100);
            } else {
              setToolbarContext(ToolbarContext.Main);
            }
          }}
          onLinkIconClick={() => {
            setToolbarContext(ToolbarContext.Main);
            editor.focus();
          }}
          onEditLink={(link) => {
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
          }}
        />
      );
  }
}
