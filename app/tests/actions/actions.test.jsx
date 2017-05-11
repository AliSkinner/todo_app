const expect = require('expect');
const actions = require('actions');

describe('Actions', () => {

  it('should generate search text action', () => {
      let action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'some search text'
      };
      let res = actions.setSearchText(action.searchText);

      expect(res).toEqual(action);
  });

  it('should generate todo action',  () => {
    let action = {
      type: 'ADD_TODO',
      text: 'some more search text'
    };
    let res = actions.addTodo(action.text);
    expect(res).toEqual(action);

  });

  it('should generate show completed todos action', () => {
    let action = {
      type: 'TOGGLE_SHOW_COMPLETED',
    };
    let res = actions.showCompleted();
    expect(res).toEqual(action);
  });

  it('should generate show toggle todo action', () => {
    let action = {
      type: 'TOGGLE_TODO',
      id: 5
    };
    let res = actions.toggleTodo(5);
    expect(res).toEqual(action);
  });

});
