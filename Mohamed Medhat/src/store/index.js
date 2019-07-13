import { combineReducers } from 'redux';
import dummyReducer from './reducers/dummyReducer';
import ContactReducer from './reducers/ContactReducer';

// compining reducers into 1 global state
export default combineReducers({
  dummy: dummyReducer,
  contacts: ContactReducer
});
