import { combineReducers } from 'redux';
import countReducer from './counter.reducer';
import shortcutReducer from './shortcut.reducer';

export default combineReducers({
  countReducer,
  shortcutReducer
})