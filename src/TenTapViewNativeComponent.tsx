import type { ViewProps } from 'react-native';
import { requireNativeComponent } from 'react-native';

export interface NativeProps extends ViewProps {
  keyboardHeight: number;
  keyboardID?: string;
  inputTag?: number;
  rootBackground?: number;
}

const ComponentName = 'TenTapView';

let TenTapViewNativeComponent: React.ComponentType<NativeProps>;

try {
  const codegenNativeComponent = require('react-native/Libraries/Utilities/codegenNativeComponent')
    .default;
  TenTapViewNativeComponent = codegenNativeComponent(ComponentName) as React.ComponentType<NativeProps>;
} catch {
  TenTapViewNativeComponent = requireNativeComponent<NativeProps>(ComponentName);
}

export default TenTapViewNativeComponent;
