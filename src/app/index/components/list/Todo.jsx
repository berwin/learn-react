import React, { Component } from 'react';

export default class Item extends Component {
  render () {
    let { deleteItem } = this.props;

    return (
      <li>
        <input className="toggle" type="checkbox" />
        <label>{this.props.text}</label>
        <button className="destroy" onClick={ deleteItem }></button>
      </li>
    )
  }
}