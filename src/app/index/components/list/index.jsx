import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/list.js';

export default class List extends Component {
  render () {
    console.log('list-index.jsx', this.props)
    return (
      <div>list</div>
    );
  }
}

let mapStateToProps = state => state;

let mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(List);