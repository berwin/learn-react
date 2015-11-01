import { combineReducers } from 'redux';
import category from './category';
import list from './list';
import active from './filter';

export default combineReducers({category, list, active});