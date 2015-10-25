import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {bindActionCreators, createStore} from 'redux';
import {Provider, connect} from 'react-redux';

// React Component
class Counter extends React.Component {
    render () {
        const {value, onIncreaseClick} = this.props;

        return (
            <div>
                <span>{value}</span>
                <button onClick={onIncreaseClick}>click</button>
            </div>
        )
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncreaseClick: PropTypes.func.isRequired
};

// Action
const increaseAction = {type: 'increase'};

// Reducer
function counter (state = {count: 0}, action) {
    let count = state.count

    switch (action.type) {
        case 'increase':
            return {count: count + 1}
        default:
            return state
    }
}

// Store
let store = createStore(counter);

function mapStateToProps (state) {
    return {value: state.count};
}

function mapDispatchToProps (dispatch) {
    // return {onIncreaseClick: dispatch(increaseAction)}
    return {onIncreaseClick: () => dispatch(increaseAction)}
    // return bindActionCreators(increaseAction, dispatch);
}

let App = connect(mapStateToProps, mapDispatchToProps)(Counter);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('example')
);