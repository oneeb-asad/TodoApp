import React from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { AppStack } from '@navigation';
import { Home } from '@screens';
import store, { persistor } from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      {/* Redux PersistGate: Ensures that the Redux store is hydrated from persisted state before rendering the app */}
      <PersistGate loading={null} persistor={persistor}>
        {/* App Stack Navigator: Defines the navigation structure of the app */}
        <AppStack />
      </PersistGate>
    </Provider>
  );
}

export default App;
