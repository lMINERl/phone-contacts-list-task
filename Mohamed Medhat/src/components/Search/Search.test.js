import { React, shallow } from '../../test/Configurations';
import { Search } from './Search';

describe('component structure', () => {
  const component = shallow(<Search />);
  it('should contain element with className=search-title', () => {
    const recived = component.find('.search-title');
    expect(recived.hasClass('search-title')).toBeTruthy();
  });
  it('should contain input with className "search-input" ', () => {
    const recived = component.find('.search-input');
    expect(recived.hasClass('search-input')).toBeTruthy();
  });
  it('the input should contain placeholder  "Search Contacts" ', () => {
    const recived = component.find('.search-input');
    expect(recived.prop('placeholder')).toBe(`Search Contacts`);
  });
});
