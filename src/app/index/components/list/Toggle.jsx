import React, { Component } from 'react';

export default class Toggle extends Component {

  handleChange(e) {
    let { updateItems } = this.props;

    updateItems({status: e.currentTarget.checked});
  }

  render () {
    let { isAllCompleted } = this.props;

    return (<input id="toggle-all" onChange={this.handleChange.bind(this)} checked={isAllCompleted} type="checkbox" />)
  }
}