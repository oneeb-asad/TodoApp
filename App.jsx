import React from 'react';
import { Provider } from 'react-redux';
import { AppStack } from '@navigation';
import { Home } from '@screens';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <AppStack />
    </Provider>
  );
}

export default App;
