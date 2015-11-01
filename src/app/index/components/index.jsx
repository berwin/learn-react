import React, { Component } from 'react';
import { Link } from 'react-router';
import Category from './category/index.jsx';
import List from './list/index.jsx';

export default class Index extends Component {
  render () {
    return (
      <div>
        <h1>Todo-List</h1>
        <div className="box">
          <Category />
          <List />
        </div>
      </div>
    );
  }
}
