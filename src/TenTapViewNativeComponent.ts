import type { HostComponent, ViewProps } from 'react-native';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import type { DirectEventHandler, Int32 } from 'react-native/Libraries/Types/CodegenTypes';

export interface NativeProps extends ViewProps {
  keyboardHeight?: Int32;
  keyboardID?: string;
  inputTag?: Int32;
  rootBackground?: Int32;

  // Optional events (keep or remove if unused)
  onReady?: DirectEventHandler<{}>;
  onChange?: DirectEventHandler<{ html?: string; json?: string }>;
}

// IMPORTANT: must be a direct default export of codegenNativeComponent
export default codegenNativeComponent<NativeProps>('TenTapView') as HostComponent<NativeProps>;
