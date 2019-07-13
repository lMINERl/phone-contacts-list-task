import * as actionTypes from '../actions/ContactActions';
// import Contacts from '../../models/Contact';

const data = [
  {
    id: 'A',
    name: 'Divian RajN',
    img: 'e1qrlvxm.bmp',
    job: 'visual designer'
  },
  {
    id: 'B',
    name: 'Allan Samuel',
    img: 'rnzsme2b.bmp',
    job: 'content writer'
  },
  {
    id: 'C',
    name: 'Anushka Tiwari',
    img: 'e1qrlvxm.bmp',
    job: 'marketer'
  },
  {
    id: 'D',
    name: 'jhonson',
    img: 'rnzsme2b.bmp',
    job: 'android developer'
  }
];

const initialState = {
  contactList: data,
  filteredList: []
};

export default function cartReducer(state = initialState, action = {}) {
  let newContactList = [...state.contactList];
  let newFilteredList = [...newContactList];

  switch (action.type) {
    case actionTypes.GET_ALL_CONTACTS:
      break;
    case actionTypes.GET_CONTACTS_BY_NAME:
      {
        const name = action.payload.toLowerCase();
        newFilteredList = newContactList.filter(
          c => c.name.toLowerCase().search(name) !== -1
        );
      }
      break;
    default:
      // console.error(action.payload);
      break;
  }
  return {
    ...state,
    contactList: newContactList,
    filteredList: newFilteredList
  };
}
