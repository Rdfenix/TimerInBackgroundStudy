import {
    ActionTypes
} from '../Actions'

const INITIAL_STATE = {
    id: 0,
    seconds: '00',
    minutes: '00',
    hours: '00'
}

const timer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.GET_TIMER:
            console.log('state', state)
            console.log('action', action.payload)
            return {
                ...state,
                id: action.payload.id,
                seconds: action.payload.seconds,
                minutes: action.payload.minutes,
                hours: action.payload.hours
            }
        default:
            return state;
    }
}

const idTimer = (state = 0, action) => {
    switch (action.type) {
        case ActionTypes.ID_CRONOMETER:
            return action.payload
        default:
            return state
    }
}

export {
    timer,
    idTimer
}