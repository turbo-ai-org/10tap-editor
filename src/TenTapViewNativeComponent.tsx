import type { ViewProps } from 'react-native';
import type { Int32 } from 'react-native/Libraries/Types/CodegenTypes';
import codegenNativeComponent, {
  type NativeComponentType,
} from 'react-native/Libraries/Utilities/codegenNativeComponent';

export interface NativeProps extends ViewProps {
  keyboardHeight: Int32;
  keyboardID?: string;
  inputTag?: Int32;
  rootBackground?: Int32;
}

// IMPORTANT: this must be unconditional so RN Codegen sees it.
export default codegenNativeComponent<NativeProps>(
  'TenTapView'
) as NativeComponentType<NativeProps>;
