import React from 'react';
import App from '../src/App';
import {it, expect} from '@jest/globals';
import {Provider} from 'react-redux';
import {store} from '../src/store';
import {render} from '@testing-library/react-native';

it('App renders correctly', () => {
  const component = (
    <Provider store={store}>
      <App />
    </Provider>
  );

  render(component);
  expect(component).toMatchSnapshot();
});
