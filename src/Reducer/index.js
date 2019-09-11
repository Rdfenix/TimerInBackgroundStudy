import {
  combineReducers
} from 'redux';

import Timer from './timerReducer'

const rootReducer = combineReducers({
  Timer
});

export default rootReducer;