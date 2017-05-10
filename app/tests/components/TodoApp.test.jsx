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

});
