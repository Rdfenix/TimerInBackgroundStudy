import {
    combineReducers
} from 'redux';

import {
    timer,
    idTimer
} from './timer'

const rootReducer = combineReducers({
    timer,
    idTimer
});

export default rootReducer;