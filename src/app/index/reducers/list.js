import { ADD_ITEM, UPDATE_ITEM, DELETE_ITEM, UPDATE_ITEMS, DELETE_ITEMS } from '../constants/ActionTypes';

/**
 * 添加
 *
 * @param {String} 添加的文字
 *
 * @return {Object} 将要添加的数据
 */
let createItem = text => {
  let time = Date.now();

  return {
    id: Math.random().toString(36).split('.').join(''),
    addTime: time,
    updateTime: time,
    status: false,
    text
  }
}

/**
 * 更新
 *
 * @param {String} 添加的文字
 *
 * @return {Array} 更新后的数据
 */
let updateItem = ({id, ...other}, state) => {
  let time = Date.now();

  return state.map(item => 
    item.id === id ?
    Object.assign({}, item, other, {
      updateTime: time
    }) :
    item
  );
}

export default (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [createItem(action.text), ...state]

    case UPDATE_ITEM:
      return updateItem(action.data, state)

    case DELETE_ITEM:
      return state.filter(item => item.id !== action.id)

    case UPDATE_ITEMS:
      return state.map(item => Object.assign({}, item, action.data))

    case DELETE_ITEMS:
      return []

    default:
      return state
  }
}