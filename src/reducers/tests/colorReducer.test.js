import * as types from 'shared/constants/ActionTypes';
import reducer from '../colorReducer';

const initialState = {
  backgroundColor: '#fff',
};

describe('color reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle header off', () => {
    expect(reducer(initialState, {
      type: types.SET_COLOR,
      data: { backgroundColor: '#fff' },
    })).toEqual({ backgroundColor: '#fff' });
  });
});
