const React = require('react');
const {connect} = require('react-redux');
const actions = require('actions');


export const AddTodo = React.createClass({

  handleSubmit: function(e) {
    e.preventDefault();
    let todoText = this.refs.todoText.value;
    let {dispatch} = this.props;
    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      dispatch(actions.startAddTodo(todoText))
    } else {
      this.refs.todoText.focus();
    }
  },

  render: function() {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="add todo"/>
          <button className="button expanded">Submit</button>
        </form>
      </div>
    );
  }
});

export default connect()(AddTodo)
