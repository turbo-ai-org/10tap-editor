import { Platform, View } from 'react-native';
import type { ComponentType } from 'react';
import type { NativeProps } from './TenTapViewNativeComponent';
import TenTapViewNativeComponent from './TenTapViewNativeComponent';

let TenTapView: ComponentType<NativeProps>;

// Keep your “only export when the native exists” logic here, not in the spec file
if (Platform.OS === 'ios' || Platform.OS === 'android') {
  try {
    const { NativeModules } = require('react-native');
    if (NativeModules?.TenTapView) {
      if (Platform.OS === 'ios') {
        // original side-effect you had
        NativeModules.TenTapView.setBridge?.();
      }
      TenTapView = TenTapViewNativeComponent as unknown as ComponentType<NativeProps>;
    } else {
      TenTapView = View as unknown as ComponentType<NativeProps>;
    }
  } catch {
    TenTapView = View as unknown as ComponentType<NativeProps>;
  }
} else {
  TenTapView = View as unknown as ComponentType<NativeProps>;
}

export default TenTapView;
