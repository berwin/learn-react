import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions'

export default class Index extends Component {
  render () {
    console.log(this.props)
    return (
      <div>
        <h1>Todo-List</h1>
        <div className="box">
          <div>menu</div>
          <div>list</div>
        </div>
      </div>
    );
  }
}


let mapStateToProps = state => state;

let mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Index);