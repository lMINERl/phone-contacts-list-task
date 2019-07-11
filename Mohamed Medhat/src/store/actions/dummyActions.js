import { dummyAPI } from '../../api/dummyApi';

export const ADD = 'ADD';
export const DELETE = 'DELETE';
export const UPDATE = 'UPDATE';
export const EDIT = 'EDIT';

// Dispatchers
export const addDispatch = item => {
  return dispatch =>
    dummyAPI
      .add(item)
      .then(v => {
        const item = v;
        dispatch(add(item));
      })
      .catch(console.error);
};

// Actions
export const add = item => {
  return {
    type: ADD,
    payload: item
  };
};
export const deleteItem = item => {
  return {
    type: DELETE,
    payload: item
  };
};
export const update = item => {
  return {
    type: UPDATE,
    payload: item
  };
};
export const edit = item => {
  return {
    type: EDIT,
    payload: item
  };
};
