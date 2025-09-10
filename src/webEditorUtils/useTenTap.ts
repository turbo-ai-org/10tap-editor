import { useMemo } from 'react';
import { useEditor } from '@tiptap/react';
import type {
  EditorOptions,
  JSONContent,
  AnyExtension,
  Extensions,
} from '@tiptap/core';

import BridgeExtension from '../bridges/base';
import { TenTapStartKit } from '../bridges/StarterKit';

export type UseTenTapOptions = {
  content?: string | JSONContent;
  extensions?: Extensions;
  bridges?: Array<BridgeExtension<any, any, any>>;
  tiptapOptions?: Partial<EditorOptions>;

  autofocus?: EditorOptions['autofocus'];
  editable?: EditorOptions['editable'];
  editorProps?: EditorOptions['editorProps'];
  onUpdate?: EditorOptions['onUpdate'];
  onCreate?: EditorOptions['onCreate'];
  onDestroy?: EditorOptions['onDestroy'];
  onSelectionUpdate?: EditorOptions['onSelectionUpdate'];
  onTransaction?: EditorOptions['onTransaction'];
  onFocus?: EditorOptions['onFocus'];
  onBlur?: EditorOptions['onBlur'];
};

function resolveExtensionsFromBridges(
  bridges: Array<BridgeExtension<any, any, any>>,
): Extensions {
  const out: AnyExtension[] = [];
  for (const bridge of bridges) {
    // BridgeExtension attaches runtime fields we can safely read
    const b: any = bridge;
    const config = b?.config;
    const extendConfig = b?.extendConfig;

    const res = bridge.configureTiptapExtensionsOnRunTime?.(config, extendConfig);
    const arr = (Array.isArray(res) ? res : [res]).filter(
      (e): e is AnyExtension => Boolean(e),
    );
    out.push(...arr);
  }
  return out;
}

export function useTenTap({
  content,
  extensions = [],
  bridges = TenTapStartKit,
  tiptapOptions,
  autofocus,
  editable,
  editorProps,
  onUpdate,
  onCreate,
  onDestroy,
  onSelectionUpdate,
  onTransaction,
  onFocus,
  onBlur,
}: UseTenTapOptions) {
  const runtimeExtensions = useMemo<Extensions>(() => {
    const bridged = resolveExtensionsFromBridges(bridges);
    return [...bridged, ...extensions];
  }, [bridges, extensions]);

  const editor = useEditor({
    extensions: runtimeExtensions,
    content,
    autofocus,
    editable,
    editorProps,
    onUpdate,
    onCreate,
    onDestroy,
    onSelectionUpdate,
    onTransaction,
    onFocus,
    onBlur,
    // TipTap v3: ensure React re-renders on every transaction.
    shouldRerenderOnTransaction: true,
    ...(tiptapOptions || {}),
  });

  return editor;
}

export default useTenTap;
