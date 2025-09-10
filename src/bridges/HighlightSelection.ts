import { Plugin, PluginKey } from '@tiptap/pm/state';
import { Decoration, DecorationSet } from '@tiptap/pm/view';
import { Extension } from '@tiptap/core';

// Adds a simple inline decoration over the active selection.
export const blueBackgroundPlugin = Extension.create({
  name: 'eventHandler',

  addProseMirrorPlugins() {
    return [
      new Plugin({
        key: new PluginKey('blueBackground'),
        state: {
          init() {
            return DecorationSet.empty;
          },
          apply(tr, _oldPluginState, _oldEditorState, newEditorState) {
            if (tr.selection.empty) {
              // No selection -> no decorations
              return DecorationSet.empty;
            }

            const { from, to } = tr.selection;
            const decorations = [
              Decoration.inline(from, to, {
                class: 'highlight-background',
              }),
            ];
            return DecorationSet.create(newEditorState.doc as any, decorations);
          },
        },
        props: {
          decorations(state) {
            return (this as any).getState(state);
          },
        },
      }),
    ];
  },
});
