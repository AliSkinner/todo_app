import React from 'react';
import {connect} from 'react-redux';

import * as actions from 'actions';

export class AddTodo extends React.Component {

  constructor (props) {
    super(props);
    this.props = props;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    let todoText = this.refs.todoText.value;
    let {dispatch} = this.props;
    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      dispatch(actions.startAddTodo(todoText));
    } else {
      this.refs.todoText.focus();
    }
  }

  render () {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="add todo"/>
          <button className="button expanded">Submit</button>
        </form>
      </div>
    );
  }
}

export default connect()(AddTodo);
