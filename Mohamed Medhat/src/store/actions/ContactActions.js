// import { dummyAPI } from '../../api/dummyApi';

export const GET_ALL_CONTACTS = 'GET_ALL_CONTACTS';
export const GET_CONTACTS_BY_NAME = 'GET_CONTACTS_BY_NAME';

// Dispatchers

// Actions
export const getAllContacts = () => {
  return {
    type: GET_ALL_CONTACTS,
    payload: ''
  };
};
export const getContactsByName = name => {
  return {
    type: GET_CONTACTS_BY_NAME,
    payload: name
  };
};
