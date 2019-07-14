import { React, shallow, mount } from '../../test/Configurations';
import { CardContactListing } from './CardContactListing';
import { Error } from './Error';
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

  it(`should display Error Component if no props  or the list is empty `, () => {
    const newProps = [];
    const component = shallow(<CardContactListing contactList={newProps} />);
    expect(component.text()).toEqual('<Error />');
  });
});
