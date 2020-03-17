import React from 'react';
import AppNavigator from './navigation/AppNavigator';
// redux
import {Provider} from 'react-redux';
import store from './store';
// reduxの永続化
import {PesistGate, PersistGate} from 'redux-persist/integration/react';
import { persistor } from './store';

export default function App() {
  // reduxはproviderタグで囲う
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
}
