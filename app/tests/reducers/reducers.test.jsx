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
        todo: {
          id: 'ab12',
          text: 'do some stuff',
          completed: false,
          createdAt: 2134
        }
      };

      let res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });

    it('should toggle the completed status of todo', () => {
      let todos = [
        {id: 1, completed: false, completedAt: undefined, text: 'blah'},
        {id: 2, completed: true, completedAt: 1, text: 'stuff'}
      ];
      let updates = {completed: false, completedAt: null};
      let action = {type: 'UPDATE_TODO', id: todos[1].id, updates};


      let res = reducers.todosReducer(df(todos), df(action));
      console.log(res)
      expect(res[0].completed).toEqual(false);
      // expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(todos[0].text);

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

  describe('authReducer', () => {
    it('should set uid on state.auth', () => {
      let action = {
        type: 'LOGIN',
        uid: 123
      };
      let res = reducers.authReducer(df({}), df(action))
      expect(res.auth.uid).toEqual(action.uid);
    });

    it('should clear uid on state.auth', () => {
      let action = {
        type: 'LOGOUT',
      };
      let res = reducers.authReducer(df({}), df(action))
      expect(res.auth).toExcludeKey('uid');
    });

  });

});
