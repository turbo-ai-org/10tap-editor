import type { ViewProps } from 'react-native';
import type { Int32 } from 'react-native/Libraries/Types/CodegenTypes';
import { type NativeComponentType } from 'react-native/Libraries/Utilities/codegenNativeComponent';
interface NativeProps extends ViewProps {
    keyboardHeight: Int32;
    keyboardID?: string;
    inputTag?: Int32;
    rootBackground?: Int32;
}
declare let TenTapView: NativeComponentType<NativeProps>;
export default TenTapView;
//# sourceMappingURL=TenTapViewNativeComponent.d.ts.map