import { SET_COLOR } from 'shared/constants/ActionTypes';

export default function setColor(key, color) {
  return {
    type: SET_COLOR,
    data: { [key]: color },
  };
}
