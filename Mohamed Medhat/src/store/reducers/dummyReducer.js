import * as actionTypes from '../actions/dummyActions';
import Dummy from '../../models/Dummy';

const initialState = {
  dummy: Dummy
};

export default function cartReducer(state = initialState, action = {}) {
  const newDummy = { ...state.dummy };

  switch (action.type) {
    case actionTypes.ADD:
      break;
    case actionTypes.DELETE:
      break;
    case actionTypes.UPDATE:
      break;
    case actionTypes.EDIT:
      break;
    default:
      // console.log(action.payload);
      break;
  }
  return {
    ...state,
    dummy: newDummy
  };
}
