import React, { Component } from 'react';
import Todo from './Todo.jsx';

export default class List extends Component {
  render () {
    let { deleteItem, updateItem, activeFilter, filter } = this.props;

    return (
      <ul className="todo-list">{
        this.props.list.map(todo => 
          filter.active && todo.status ? '' :
          <Todo
            key={todo.id}
            deleteItem={ () => deleteItem(todo.id) }
            updateItem={ data => updateItem({ id: todo.id, ...data }) }
            activeFilter={ activeFilter }
            {...todo} />
        )
      }</ul>
    )
  }
}
