import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import { configureStore } from './store/store';

// debugging
import * as actions from './actions/session-actions';
// debugging

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  // testing
  window.store = store;
  window.actions = actions;
  // testing

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
