import * as types from '../constants/CategoryTypes';

export function addCategory(name) {
  return {
    type: types.ADD_CATEGORY,
    name
  }
}