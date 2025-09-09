import { useEditor } from '@tiptap/react';
import { useMemo } from 'react';
import type { Editor, Extension } from '@tiptap/core';

export interface UseTenTapArgs {
  bridges?: any[]; // Bridge array (not used in web context)
  tiptapOptions?: {
    extensions: Extension[];
    content?: string;
    onUpdate?: ({ editor }: { editor: Editor }) => void;
    [key: string]: any;
  };
}

/**
 * TipTap v3 compatible useTenTap hook for web usage
 * This provides the same interface as the mobile useTenTap but uses direct TipTap v3
 * with bridge communication to React Native WebView
 */
export const useTenTap = (options: UseTenTapArgs = {}) => {
  const { tiptapOptions = {} } = options;
  
  // Bridge extension configs from React Native (if available)
  const extensionConfigs = useMemo(
    () => {
      try {
        return JSON.parse((window as any).bridgeExtensionConfigMap || '{}');
      } catch {
        return {};
      }
    },
    []
  );

  // Create TipTap v3 editor with bridge communication
  const editor = useEditor({
    ...tiptapOptions,
    onUpdate: ({ editor }) => {
      // Call original onUpdate if provided
      if (tiptapOptions.onUpdate) {
        tiptapOptions.onUpdate({ editor });
      }
      
      // Bridge communication with React Native
      if ((window as any).ReactNativeWebView) {
        try {
          (window as any).ReactNativeWebView.postMessage(JSON.stringify({
            type: 'content-change',
            content: editor.getHTML()
          }));
        } catch (e) {
          console.error('Failed to post message to React Native:', e);
        }
      }
    },
    onSelectionUpdate: ({ editor }) => {
      // Bridge selection updates
      if ((window as any).ReactNativeWebView) {
        try {
          const { from, to } = editor.state.selection;
          (window as any).ReactNativeWebView.postMessage(JSON.stringify({
            type: 'selection-change',
            selection: { from, to }
          }));
        } catch (e) {
          console.error('Failed to post selection message:', e);
        }
      }
    },
    onTransaction: ({ editor, transaction }) => {
      // Bridge transaction updates for bridges if needed
      if ((window as any).ReactNativeWebView && transaction.docChanged) {
        try {
          (window as any).ReactNativeWebView.postMessage(JSON.stringify({
            type: 'transaction',
            docChanged: transaction.docChanged
          }));
        } catch (e) {
          console.error('Failed to post transaction message:', e);
        }
      }
    }
  });

  return editor;
};