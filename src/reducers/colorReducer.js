import { SET_COLOR } from 'shared/constants/ActionTypes';

const initialState = {
  backgroundColor: '#fff',
};

export default function showHeader(state = initialState, action) {
  switch (action.type) {
    case SET_COLOR:
      return { ...state, ...action.data };
    default:
      return state;
  }
}
