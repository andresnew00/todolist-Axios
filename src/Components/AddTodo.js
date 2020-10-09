import React, { Component } from "react";

export default class AddTodo extends Component {
  state = {
    title: "",
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
      e.preventDefault()
      this.props.addTodo(this.state.title);
      this.setState({ title: '' })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          value={this.state.title}
          name="title"
          placeholder="Add Todo ..."
          onChange={this.onChange}
        />
        <input type="submit" value="Submit" className="btn" />
      </form>
    );
  }
}
