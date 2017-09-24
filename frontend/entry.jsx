import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import { configureStore } from './store/store';

// !!!testing
import * as actions from './actions/session-actions';
import Test from './todo-list';
// !!!

// document.addEventListener('DOMContentLoaded', () => {
//   const store = configureStore();
//
//   // !!!testing
//   window.store = store;
//   window.actions = actions;
//   // !!!
//
//   const root = document.getElementById('root');
//   ReactDOM.render(<Root store={store}/>, root);
// });

// !!! testing
document.addEventListener('DOMContentLoaded', () => {
  window.Test = Test;
  const root = document.getElementById('test');
  ReactDOM.render(<Test in={true} />, test);
});
// !!!
