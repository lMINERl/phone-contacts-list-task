import ContactReducer from '../reducers/ContactReducer';
import { getContactsByName } from '../actions/ContactActions';
describe('Contact Action functionality getContactsByName', () => {
  const stateData = {
    contactList: [
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
      },
      {
        id: 'E',
        name: 'nordiln sawary',
        img: 'e1qrlvxm.bmp',
        job: 'marketer'
      }
    ],
    filteredList: []
  };
  it('should return any name that contain the searched character', () => {
    const recived = ContactReducer(stateData, getContactsByName('A'));
    const expected = {
      contactList: [...stateData.contactList],
      filteredList: [stateData.contactList[0], stateData.contactList[2]]
    };
    expect(recived).toEqual(expected);
  });

  it(`should ignore searched characters unless input is alphanumeric with input (/@!) should return all list `, () => {
    const recived = ContactReducer(stateData, getContactsByName(`/@!`));
    const expected = {
      contactList: [...stateData.contactList],
      filteredList: [...stateData.contactList]
    };
    expect(recived).toEqual(expected);
  });

  it(`should ignore searched characters unless input is alphanumeric with input /@!a&$%@ should return all a `, () => {
    const recived = ContactReducer(stateData, getContactsByName(`/@!a&$%@`));
    const expected = {
      contactList: [...stateData.contactList],
      filteredList: [stateData.contactList[0], stateData.contactList[2]]
    };
    expect(recived).toEqual(expected);
  });
});
