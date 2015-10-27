import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {bindActionCreators, combineReducers, createStore} from 'redux';
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
function count (state = 0, action) {

    switch (action.type) {
        case 'increase':
            return state + 1
        default:
            return state
    }
}

function count2 (state = 0, action) {

    switch (action.type) {
        case 'increase2':
            return state + 1
        default:
            return state
    }
}

let todoApp = combineReducers({
  count, count2
});

// Store
let store = createStore(todoApp);

function mapStateToProps (state) {
    return {value: state.count};
}

function mapDispatchToProps (dispatch) {
    store.getState()
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