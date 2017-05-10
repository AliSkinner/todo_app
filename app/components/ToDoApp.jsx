const React = require('react');
const TodoList = require('TodoList');

const TodoApp = React.createClass({

  getInitialState: function() {
    return {
      todos: [
        {
          id: 1,
          text: 'walk dog'
        },
        {
          id: 2,
          text: 'wash car'
        },
        {
          id: 3,
          text: 'cook dinner'
        },
        {
          id: 4,
          text: 'go for run'
        }
      ]
    };
  },

  render: function() {
    let {todos} = this.state;
    return (
      <div>
        <h1>ToDoApp.jsx</h1>
        <TodoList todos={todos} />
      </div>
    );
  }

});

module.exports = TodoApp;
