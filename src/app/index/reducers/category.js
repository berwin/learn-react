import { ADD_CATEGORY } from '../constants/CategoryTypes';


/**
 * 创建分类
 *
 * 
 */
let createCategory = name => {
  let time = Date.now();

  return {
    id: Math.random().toString(36).split('.').join(''),
    addTime: time,
    updateTime: time,
    name
  }
}

export default (state = [], action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return [createCategory(action.name)]

    default:
      return state
  }
}