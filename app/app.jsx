const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');

const TodoApp = require('TodoApp');
const actions = require('actions');
let store = require('configureStore').configure();

store.subscribe(() => {
  console.log('new state: ', store.getState())
})

store.dispatch(actions.addTodo('walk dog'))
store.dispatch(actions.setSearchText('blah'))
store.dispatch(actions.toggleTodo(1))


// load foundation
$(document).foundation();

// custom scss
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);
