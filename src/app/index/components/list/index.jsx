import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/list.js';

export default class List extends Component {
  render () {
    console.log('list-index.jsx', this.props)
    return (
      <div className="list">
        <header className="list-header">
          <input id="toggle-all" type="checkbox" />
          <input id="new-todo" placeholder="What needs to be done?" />
        </header>
        <ul className="todo-list">
          <li>
            <input className="toggle" type="checkbox" />
            <label>adsfds</label>
            <button className="destroy"></button>
          </li>
          <li>
            <input className="toggle" type="checkbox" />
            <label>adsfds</label>
            <button className="destroy"></button>
          </li>
          <li>
            <input className="toggle" type="checkbox" />
            <label>adsfds</label>
            <button className="destroy"></button>
          </li>
        </ul>
        <footer className="list-footer">
          29个已完成 <a href="javascript:;">显示</a>
        </footer>
      </div>
    );
  }
}
let mapStateToProps = state => state;

let mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(List);