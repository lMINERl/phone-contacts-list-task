import { React, shallow } from '../../test/Configurations';
import CardContact from './CardContact';

describe('<CardContact />', () => {
  const props = {
    id: 'D',
    name: 'jhonson',
    img: 'rnzsme2b.bmp',
    job: 'android developer'
  };

  it('should output the img provided by props', () => {
    const component = shallow(<CardContact data={props} />);
    const imgName = component.find('img').prop('src');
    expect(imgName).toEqual(props.img);
  });
  it('should output the default img if img is wrong', () => {
    const newProps = { ...props };
    newProps.img = 'RandomString';
    const component = shallow(<CardContact data={newProps} />);
    const imgName = component.find('img').prop('src');
    expect(imgName).toEqual('profile-img.jpg');
  });
});
