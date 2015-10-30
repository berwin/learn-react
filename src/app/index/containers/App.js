import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';

class View extends Component {
  render () {
    return (<h1>Hello berwin</h1>)
  }
}

let mapStateToProps = state => state;

let mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(View);