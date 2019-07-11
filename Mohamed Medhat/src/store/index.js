import { combineReducers } from 'redux';
import dummyReducer from './reducers/dummyReducer';

// compining reducers into 1 global state
export default combineReducers({
  dummy: dummyReducer
});
