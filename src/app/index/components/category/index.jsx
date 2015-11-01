import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/category.js';

export default class Category extends Component {
  render () {
    console.log('category-index.jsx', this.props)
    return (
      <div className="category">
        <li className="active">Default</li>
      </div>
    );
  }
}

let mapStateToProps = state => state;

let mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Category);