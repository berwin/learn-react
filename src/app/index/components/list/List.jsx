import React, { Component } from 'react';

class Item extends Component {
  render () {
    return (
      <li>
        <input className="toggle" type="checkbox" />
        <label>{this.props.text}</label>
        <button className="destroy"></button>
      </li>
    )
  }
}

export default class List extends Component {
  render () {
    return (
      <ul className="todo-list">
        {this.props.list.map(item => <Item key={item.id} text={item.text} />)}
      </ul>
    )
  }
}
