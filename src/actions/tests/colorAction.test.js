import * as types from 'shared/constants/ActionTypes';
import setColor from '../colorAction';

const initialState = {
  backgroundColor: '#fff',
};

describe('color', () => {
  it('sets backgroundColor', () => {
    const expectedActions = {
      type: types.SET_COLOR,
      data: { backgroundColor: '#eee' },
    };
    expect(setColor('backgroundColor', '#eee')).toEqual(expectedActions);
  });
});
