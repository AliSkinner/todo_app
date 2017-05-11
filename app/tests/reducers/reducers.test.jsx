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

});
