import React from 'react';
import { shallow } from 'enzyme';
import { ColorPicker } from './ColorPicker';

function setup() {
  const props = { color: '#fff', setColor: jest.fn(), elementToBeColored: 'backgroundColor' };
  const comp = shallow(<ColorPicker {...props} />);
  return { comp, props };
}

it('calls setColor', () => {
  const { comp, props } = setup();
  comp.instance().handleChangeComplete({ hex: props.color });
  expect(props.setColor).toBeCalledWith(props.elementToBeColored, props.color);
});
