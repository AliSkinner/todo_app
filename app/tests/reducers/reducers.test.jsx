const expect = require('expect');
const reducers = require('reducers');
const df = require('deep-freeze-strict');

describe('Reducers', () => {

  describe('searchTextReducer', () => {

    it('should set searchText', () => {
      let action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'some text'
      };

      let res = reducers.searchTextReducer(df(''), df(action));
      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {

    it('should set toggle showCompleted', () => {
      let action = {
        type: 'TOGGLE_SHOW_COMPLETED',
        showCompleted: false
      };

      let res = reducers.showCompletedReducer(df(''), df(action));
      expect(res).toBe(true);
    });

  });

  describe('todosReducer', () => {

    it('should add new todo', () => {
      let action = {
        type: 'ADD_TODO',
        text: 'do some sotuff'
      };

      let res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });

    it('should toggle the completed status of todo', () => {
      let action = {
        type: 'TOGGLE_TODO',
        id: 1,
      };

      let todos = [
        {id: 1, completed: false, completedAt: undefined, text: 'blah'},
        {id: 2, completed: true, completedAt: 1, text: 'stuff'}
      ];

      let res = reducers.todosReducer(df(todos), df(action));
      expect(res[0].completed).toEqual(true);
      expect(typeof res[0].completedAt).toBe('number');

    });

    it('should add existing todos', () => {
      let todos = [
        {text: 'some text'},
        {text: 'some more text'}
      ];
      let action = {
        type: 'ADD_TODOS',
        todos
      };
      let res = reducers.todosReducer(df([]), df(action))
      expect(res).toEqual(todos);
    });

  });

});
