import React, { Component } from 'react';

export default class Item extends Component {
  toggleTodo(e) {
    this.props.updateItem({
      status: e.currentTarget.checked
    })
  }

  render () {
    let { deleteItem, status } = this.props;

    return (
      <li>
        <input className="toggle" type="checkbox" onChange={ this.toggleTodo.bind(this) } checked={ status } />
        <label>{this.props.text}</label>
        <button className="destroy" onClick={ deleteItem }></button>
      </li>
    )
  }
}