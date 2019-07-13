import { React, shallow } from '../../test/Configurations';
import { CardContactListing } from './CardContactListing';

describe('component functionality', () => {
  const props = [
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

  it('should display cards as same number as length of data provided', () => {
    const component = shallow(<CardContactListing contactList={props} />);
    const recived = component.find('.row').filter('.row').length;
    expect(recived).toBe(props.length);
  });

  it(`should display "No Contact Found" if no props  or the list is empty `, () => {
    const newProps = [];
    const component = shallow(<CardContactListing contactList={newProps} />);
    const recived = component.text();
    expect(recived).toEqual('No Contact Found');
  });
});
