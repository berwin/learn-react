import { combineReducers } from 'redux';
import category from './category';
import list from './list';
import filter from './filter';

export default combineReducers({category, list, filter});