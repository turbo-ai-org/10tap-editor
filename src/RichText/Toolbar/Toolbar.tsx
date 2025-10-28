import { FlatList, StyleSheet, Platform, View } from 'react-native';
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
          type="liquidGlass"
          glassType="clear"
          glassOpacity={1.0}
          blurType="systemChromeMaterial"
          blurAmount={100}
          reducedTransparencyFallbackColor="transparent"
          style={[
            hideToolbar ? editor.theme.toolbar.hidden : undefined,
            {
              overflow: 'hidden',
              // borderWidth: 0.5,
              borderColor: 'rgba(255, 255, 255, 0.2)',
              borderRadius: 14,
              borderTopWidth: 0,
              borderBottomWidth: 0,
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
              // minHeight: '100%'
              height: '100%',
            }}
            contentContainerStyle={{
              paddingHorizontal: 4,
              alignItems: 'center',
            }}
            renderItem={({ item }) => {
              if ((item as any).isDivider) {
                return (
                  <View
                    style={{
                      width: 1,
                      height: '100%',
                      backgroundColor: '#EAEAEA',
                      marginHorizontal: 4,
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
