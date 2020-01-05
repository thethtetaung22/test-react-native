/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
const logBackground = async () => {
    console.log("My Data from Background : My Background Data");
    // ExampleWidget.finish();
}
AppRegistry.registerHeadlessTask('ExampleWidget', () => logBackground);
