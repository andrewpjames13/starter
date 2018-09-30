import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

function setup() {
  const props = { backgroundColor: '#fff' };
  const comp = shallow(<App {...props} />);
  return { comp, props };
}

it('renders without crashing', () => {
  const { comp } = setup();
  expect(comp.find('.hello').length).toBe(1);
});
