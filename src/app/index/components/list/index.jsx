import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/list.js';
import AddTodo from './AddTodo.jsx';
import List from './List.jsx';

export default class ListBox extends Component {
  render () {
    console.log('list-index.jsx', this.props)

    return (
      <div className="list">
        <header className="list-header">
          <input id="toggle-all" type="checkbox" />
          <AddTodo addItem={this.props.addItem} />
        </header>
        <List {...this.props} />
        <footer className="list-footer">
          <a href="javascript:;">Show Completed</a>
        </footer>
      </div>
    );
  }
}
let mapStateToProps = state => state;

let mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListBox);