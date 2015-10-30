import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router, Route, Link } from 'react-router';
import * as actions from '../actions';
import Index from '../components/index.jsx';

class About extends Component {
  render () {
    alert(1)
    return (<h1>About</h1>);
  }
}

class View extends Component {
  render () {
    return (
      <Router>
        <Route path="/" component={Index}>
          <Route path="about" component={About}/>
        </Route>
      </Router>
    )
  }
}

let mapStateToProps = state => state;

let mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(View);