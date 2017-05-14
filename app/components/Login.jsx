import React from 'react';
import * as redux from 'react-redux';

import * as actions from 'actions';

export const Login = React.createClass({
  onLogin() {
      let {dispatch} = this.props;
      dispatch(actions.startLogin());
  },

  render() {
    return (
      <div>
        <h1 className="page-title">ToDo App</h1>

        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="callout callout-auth">
              <h3>Login</h3>
              <p>Login with GitHub account below.</p>
              <button className="button" onClick={this.onLogin}>Login with Github</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

export default redux.connect()(Login);
