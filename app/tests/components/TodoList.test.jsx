const expect = require('expect');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const $ = require('jquery');
const {Provider} = require('react-redux');

import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodo, {Todo} from 'Todo';
import {configure} from 'configureStore';

describe('TodoList', () => {

  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one todo component for each todo item', () => {
    let todos = [{
      id: 1,
      text: 'stuff',
      completed: false,
      completedAt: undefined,
      createdAt: 10
    }, {
      id: 2,
      text: 'more stuff',
      completed: false,
      completedAt: undefined,
      createdAt: 10
    }];

    let store = configure({
      todos
    });
    let provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedTodoList/>
      </Provider>
    );
    let todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList);
    let todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

    expect(todosComponents.length).toBe(todos.length);
  });

  it('should render empty message if ne todos', () => {
    let todos = [];

    let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    let $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container__message').length).toBe(1);
  });

});
