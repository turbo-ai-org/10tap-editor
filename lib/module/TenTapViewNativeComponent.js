import { Platform, View } from 'react-native';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
let TenTapView;
if (Platform.OS === 'ios' || Platform.OS === 'android') {
  try {
    const {
      NativeModules
    } = require('react-native');
    // Only export codegenNativeComponent if the TenTapView native module is available
    // This fixes https://github.com/10play/10tap-editor/issues/300#issuecomment-2948843654
    if (NativeModules.TenTapView) {
      if (Platform.OS === 'ios') {
        NativeModules.TenTapView.setBridge();
      }
      TenTapView = codegenNativeComponent('TenTapView');
    } else {
      TenTapView = View;
    }
  } catch (err) {
    console.warn('Failed to load TenTapView:', err);
    TenTapView = View;
  }
} else {
  TenTapView = View;
}
export default TenTapView;
//# sourceMappingURL=TenTapViewNativeComponent.js.map