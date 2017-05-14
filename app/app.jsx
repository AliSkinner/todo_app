import React from 'react';
const ReactDOM = require('react-dom');
const {hashHistory} = require('react-router');
const {Provider} = require('react-redux');

const actions = require('actions');
const store = require('configureStore').configure();
import firebase from 'app/firebase';
import router from 'app/router/';


firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    hashHistory.push('/todos');
  } else {
    hashHistory.push('/');
  }
});

store.dispatch(actions.startAddTodos());

// load foundation
$(document).foundation();

// custom scss
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
