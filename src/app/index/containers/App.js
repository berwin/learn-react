import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router, Route, Link } from 'react-router';
import * as actions from '../actions';
import Index from '../components/index.jsx';

export default class View extends Component {
  render () {
    return (
      <Router>
        <Route path="/" component={Index} store={this.props}></Route>
      </Router>
    )
  }
}
