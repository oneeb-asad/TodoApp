import React from 'react';
import { Provider } from 'react-redux';
import { Home } from '@screens';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
