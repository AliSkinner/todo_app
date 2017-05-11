const expect = require('expect');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const $ = require('jquery');

const {AddTodo} = require('AddTodo');

describe('Todo', () => {

  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should dispatch a todo when valid todo text', () => {
    let todoText = 'check mail';
    let action = {type: 'ADD_TODO', text: todoText}
    let spy = expect.createSpy();
    let addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    let $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(action);

  });

  it('should not dispatch a todo with invalid todo text', () => {
    let spy = expect.createSpy();
    let addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    let $el = $(ReactDOM.findDOMNode(addTodo));
    let todoText = '';

    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();

  });

});
