import { React, shallow } from '../../test/Configurations';
import CardContact from './CardContact';

describe('<CardContact />', () => {
  const props = {
    id: 'D',
    name: 'jhonson',
    img: 'rnzsme2b.bmp',
    job: 'android developer'
  };

  it('renders', () => {
    const component = shallow(<CardContact data={props} />);
    expect(true).toBeTruthy();
  });
});
