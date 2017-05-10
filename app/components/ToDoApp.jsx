const React = require('react');
const TodoList = require('TodoList');
const AddTodo = require('AddTodo');
const TodoSearch = require('TodoSearch');


const TodoApp = React.createClass({

  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
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

  handleAddTodo: function (text) {
    alert('new todo: ' + text);
  },

  handleSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted,
      searchText: searchText.toLowerCase()
    });
  },

  render: function() {
    let {todos} = this.state;
    return (
      <div>
        <h1>ToDoApp</h1>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }

});

module.exports = TodoApp;
