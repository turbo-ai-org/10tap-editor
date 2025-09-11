import { Platform, View, NativeModules } from 'react-native';
import type { HostComponent } from 'react-native';
import TenTapNative, { type NativeProps } from './TenTapViewNativeComponent';

// iOS: set the RCTBridge on the native module once (if available)
if (Platform.OS === 'ios' && NativeModules?.TenTapView?.setBridge) {
  try {
    NativeModules.TenTapView.setBridge();
  } catch {
    // noop
  }
}

// If the native module is missing for any reason, fall back to a plain View to avoid crashes.
const TenTapView =
  (NativeModules?.TenTapView ? TenTapNative : (View as any)) as HostComponent<NativeProps>;

export default TenTapView;
