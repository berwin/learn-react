import { createStore } from 'redux';
import rootReducers from '../reducers';

// 之所以不直接返回 store 而是返回 createStore 是为了让外界可以传递initialState。
export default initialState => createStore(rootReducers, initialState);