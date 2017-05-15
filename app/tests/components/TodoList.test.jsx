import expect from 'expect';
import $ from 'jquery';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import {configure} from 'configureStore';

import ConnectedTodo, {Todo} from 'Todo';
import ConnectedTodoList, {TodoList} from 'TodoList';

describe('TodoList', () => {

  it('should exist', () => {
    expect(TodoList).toExist();
  });

  // it('should render one todo component for each todo item', () => {
  //   let todos = [{
  //     id: 1,
  //     text: 'stuff',
  //     completed: false,
  //     completedAt: undefined,
  //     createdAt: 10
  //   }, {
  //     id: 2,
  //     text: 'more stuff',
  //     completed: false,
  //     completedAt: undefined,
  //     createdAt: 10
  //   }];
  //
  //   let store = configure({
  //     todos
  //   });
  //   let provider = TestUtils.renderIntoDocument(
  //     <Provider store={store}>
  //       <ConnectedTodoList/>
  //     </Provider>
  //   );
  //   let todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList);
  //   let todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);
  //
  //   expect(todosComponents.length).toBe(todos.length);
  // });

  it('should render empty message if ne todos', () => {
    let todos = [];

    let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    let $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container__message').length).toBe(1);
  });

});
