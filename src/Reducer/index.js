import {
    combineReducers
} from 'redux';

import {
    timer,
    timerData
} from './timer'

const rootReducer = combineReducers({
    timer,
    timerData
});

export default rootReducer;