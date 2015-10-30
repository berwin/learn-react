import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store';
import Root from './containers/Root';

let store = createStore();

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('app')
);