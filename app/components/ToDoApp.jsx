const React = require('react');
const TodoList = require('TodoList');
const AddTodo = require('AddTodo');
const TodoSearch = require('TodoSearch');
const uuid = require('node-uuid');

const TodoApp = React.createClass({

  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'walk dog'
        },
        {
          id: uuid(),
          text: 'wash car'
        },
        {
          id: uuid(),
          text: 'cook dinner'
        },
        {
          id: uuid(),
          text: 'go for run'
        }
      ]
    };
  },

  handleAddTodo: function (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text
        }
      ]
    });
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
