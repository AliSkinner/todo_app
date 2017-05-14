const expect = require('expect');
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import firebase, {firebaseRef} from 'app/firebase';

const actions = require('actions');
const createMockStore = configureMockStore([thunk]);

describe('Actions', () => {

  it('should generate search text action', () => {
      let action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'some search text'
      };
      let res = actions.setSearchText(action.searchText);

      expect(res).toEqual(action);
  });

  it('should generate add todo action',  () => {
    let action = {
      type: 'ADD_TODO',
      todo: {
        id: 'ab12',
        text: 'do some stuff',
        completed: false,
        createdAt: 2134
      }
    };

    let res = actions.addTodo(action.todo);
    expect(res).toEqual(action);

  });

  it('should create todo and dispatch ADD_TODO', (done) => {
    const store = createMockStore({});
    const todoText = 'some text here';

    store.dispatch(actions.startAddTodo(todoText)).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toBe('ADD_TODO');
      expect(actions[0].todo.text).toBe(todoText);
      done();
    }).catch(done);
  });

  it('should generate show completed todos action', () => {
    let action = {
      type: 'TOGGLE_SHOW_COMPLETED',
    };
    let res = actions.toggleShowCompleted();
    expect(res).toEqual(action);
  });

  it('should generate update show todo action', () => {
    let action = {
      type: 'UPDATE_TODO',
      id: 5,
      updates: {completed: false}
    };
    let res = actions.updateTodo(action.id, action.updates);
    expect(res).toEqual(action);
  });

  it('should generate ADD_TODOS action', () => {
    let todos = [
      {text: 'some text'},
      {text: 'some more text'}
    ];
    let action = {
      type: 'ADD_TODOS',
      todos
    };
    let res = actions.addTodos(todos);
    expect(res).toEqual(action);
  });

  describe('Tests with firebase todos', () => {
    let testTodoRef;

    beforeEach((done) => {
      testTodoRef = firebaseRef.child('todos').push();
      testTodoRef.set({
        text: 'some stuff',
        completed: false,
        completedAt: 1
      }).then(() => done());
    });

    afterEach((done) => {
      testTodoRef.remove().then(() => done());
    });

    it('should toggle todo & dispatch UPDATE_TODO action', (done) => {
      const store = createMockStore({});
      const action = actions.startToggleTodo(testTodoRef.key, true);
      store.dispatch(action).then(() => {
        const mockActions = store.getActions();
        console.log(mockActions)
        // expect(mockActions[0].type).toEqual('UPDATE_TODO');
        // expect(mockActions[0].completed).toEqual(true);
        expect(mockActions[0].updates.completedAt).toExist();
        done();
      }, done)
    })

  });

});
