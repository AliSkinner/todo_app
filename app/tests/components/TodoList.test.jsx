const expect = require('expect');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const $ = require('jquery');

const TodoList = require('TodoList');
const Todo = require('Todo');


describe('TodoList', () => {

  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one todo component for each todo item', () => {
    let todos = [{
      id: 1,
      text: 'stuff'
    }, {
      id: 2,
      text: 'more stuff'
    }];

    let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    let todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todosComponents.length).toBe(todos.length);

  });

});
