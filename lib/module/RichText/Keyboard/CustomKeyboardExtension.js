import { AppRegistry } from 'react-native';
export class CustomKeyboardExtension {
  constructor(id, comp) {
    this.id = id;
    this.comp = comp;
    this.id = id;
    this.comp = comp;
    AppRegistry.registerComponent(id, () => comp);
  }
}
//# sourceMappingURL=CustomKeyboardExtension.js.map