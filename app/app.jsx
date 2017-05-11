const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');
const {Provider} = require('react-redux');

const TodoApp = require('TodoApp');
const actions = require('actions');
const store = require('configureStore').configure();
const TodoAPI = require('TodoAPI');

store.subscribe(() => {
  let state = store.getState();
  console.log('new state: ', state);
  TodoAPI.setTodos(state.todos);

})

let initialTodos = TodoAPI.getTodos();
console.log('initialTodos', initialTodos)
store.dispatch(actions.addTodos(initialTodos));

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
