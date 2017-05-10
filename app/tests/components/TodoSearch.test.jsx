const expect = require('expect');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const $ = require('jquery');

const TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {

  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  it('should call onSearch with entered input text', () => {
    let spy = expect.createSpy();
    let todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
    let searchText = 'dog';

    todoSearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(todoSearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(false, 'dog');
  });

  it('should call onSearch with proper checked value', () => {

    let spy = expect.createSpy();
    let todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
    let searchText = todoSearch.refs.searchText.value;

    todoSearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(true, searchText);

  });

});
