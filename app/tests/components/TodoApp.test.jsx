const expect = require('expect');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const $ = require('jquery');

const TodoApp = require('TodoApp');

describe('TodoApp', () => {

  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add new todo to todos state on handleAddTodo', () => {
    let todoText = 'test text';
    let todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);

  });

});
