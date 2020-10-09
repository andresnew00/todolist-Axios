import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div>
        <p style={this.getStyle()}>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />
          {title}
          <button onClick={this.props.deleteItem.bind(this, id)}>X</button>
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todos: PropTypes.object.isRequired,
};
