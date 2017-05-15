import expect from 'expect';
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import * as actions from 'actions';

import {AddTodo} from 'AddTodo';

describe('Todo', () => {

  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should dispatch a todo when valid todo text', () => {
    let todoText = 'check mail';
    let action = actions.startAddTodo(todoText);
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
