const React = require('react');

import Todo from 'Todo';
const {connect} = require('react-redux');
const TodoAPI = require('TodoAPI')

export const TodoList = React.createClass({
  render: function() {
    let {todos, searchText, showCompleted} = this.props;

    let renderTodos = () => {
      if (todos.length === 0) {
          return (
            <p className="container__message">Nothing to Do</p>
          );
      }

      return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
        return (
          <Todo key={todo.id} {...todo} />
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
});

export default connect(
  (state) => {
    return state;
  }
)(TodoList);
