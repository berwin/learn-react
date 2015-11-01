import React, { Component } from 'react';

export default class AddTodo extends Component {

  handleKeyUp(e) {
    if (e.keyCode === 13) {
      let text = e.target.value;
      if (!text) return;

      this.props.addItem(text);
      e.target.value = '';
    }
  }

  render () {

    console.log( 'AddTodo.jsx', this.props )

    return (
      <input id="new-todo" placeholder="What needs to be done?" onKeyUp={ this.handleKeyUp.bind(this) } />
    );
  }
}

AddTodo.propTypes = {
  addItem: React.PropTypes.func.isRequired
}