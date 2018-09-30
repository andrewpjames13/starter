import { combineReducers } from 'redux';
import color from './colorReducer';

const rootReducer = combineReducers({
  color,
});
export default rootReducer;
