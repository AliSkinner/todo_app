const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');
const {Provider} = require('react-redux');

const TodoApp = require('TodoApp');
const actions = require('actions');
let store = require('configureStore').configure();

store.subscribe(() => {
  console.log('new state: ', store.getState())
})

// load foundation
$(document).foundation();

// custom scss
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);
