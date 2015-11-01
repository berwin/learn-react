import React, { Component } from 'react';
import Todo from './Todo.jsx';

export default class List extends Component {
  render () {
    let { deleteItem, updateItem } = this.props;

    return (
      <ul className="todo-list">{
        this.props.list.map(todo => 
          <Todo
            key={todo.id}
            deleteItem={ () => deleteItem(todo.id) }
            updateItem={ data => updateItem({ id: todo.id, ...data }) }
            {...todo} />
        )
      }</ul>
    )
  }
}
