import { FILTER_ITEMS } from '../constants/ActionTypes';

export default (state = {active: true}, action) => {
  switch (action.type) {
    case FILTER_ITEMS:
      return Object.assign({}, state, {active: action.active})

    default:
      return state
  }
}