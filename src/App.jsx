import React from 'react';
import ApplicationNavigator from './navigators/ApplicationNavigator';
import {Provider} from 'react-redux';
import {store} from './store';

const App = () => (
  <Provider store={store}>
    <ApplicationNavigator />
  </Provider>
);

export default App;
