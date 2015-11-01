import React, { Component } from 'react';
import Todo from './Todo.jsx';

export default class List extends Component {
  render () {
    return (
      <ul className="todo-list">
        {this.props.list.map(item => <Todo key={item.id} text={item.text} />)}
      </ul>
    )
  }
}
