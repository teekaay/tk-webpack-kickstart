import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Store from './store';

import { initApp, INIT_APP } from './actions';
import App from './components/App';

Store.dispatch(initApp());

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
