import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import App from './App';

function setup() {
  const props = {};
  const comp = shallow(<App />);
  return { comp, props };
}
it('renders without crashing', () => {
  const { comp } = setup();
  expect(comp.find('.hello').length).toBe(1);
});
