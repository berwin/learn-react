import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
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
