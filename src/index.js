import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Store from './store';

import { changeMessage } from './actions';

import App from './components/App';

Store.dispatch(changeMessage('Test'));

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
