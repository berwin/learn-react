import { FILTER_ITEMS } from '../constants/ActionTypes';

export default (state = true, action) => {
  switch (action.type) {
    case FILTER_ITEMS:
      return action.active

    default:
      return state
  }
}