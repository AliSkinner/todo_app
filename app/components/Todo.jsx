const React = require('react');

const Todo = React.createClass({
  // onToggle: function (id) {
  //   this.props.onToggle(id)
  // },

  render: function() {
    let {id, text, completed, onToggle} = this.props;
    return (
      <div onClick={() => {
        this.props.onToggle(id);
      }}>
        <input type="checkbox" checked={completed} />
        {text}
      </div>
    );
  }
});

module.exports = Todo;
