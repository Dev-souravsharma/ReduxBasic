/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import DemoScreen from './src/Screens/Demo';
import {Provider} from 'react-redux';
import store from './src/Redux/store';
function App() {
  return (
    <Provider store={store}>
      <DemoScreen />
    </Provider>
  );
}
export default App;
