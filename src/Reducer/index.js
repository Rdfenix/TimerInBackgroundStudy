import {
  combineReducers
} from 'redux';

import Teste from './teste'
import timer from './timer'

const rootReducer = combineReducers({
  timer
});

export default rootReducer;