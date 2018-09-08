import React, { Component } from 'react';
import { Provider } from 'mobx-react/native';

import Navigation from './src/navigation';
import stores from './src/data/stores';
// Use this as the root component
export default class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <Navigation />
      </Provider>
    );
  }
}
