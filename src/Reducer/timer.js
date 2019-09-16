import {
    ActionTypes
} from '../Actions'

const initialTImerState = {
    id: 0,
    seconds: '00',
    minutes: '00',
    hours: '00',
    isRunning: false
}

const INITIAL_STATE = {
    cronometer: [initialTImerState]

}

const timer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.GET_TIMER:
            const id = action.payload.id - 1;
            const next = id + 1;

            let cronometers = [...state.cronometer];
            cronometers[id] = {
                id: action.payload.id,
                seconds: action.payload.seconds,
                minutes: action.payload.minutes,
                hours: action.payload.hours,
                isRunning: true
            }

            if (typeof cronometers[next] === 'undefined') {
                cronometers.push(initialTImerState)
            }
            return {
                ...state, cronometer: [...cronometers]
            }
            default:
                return state;
    }
}

const timerData = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.ID_CRONOMETER:
            return action.payload
        default:
            return state
    }
}

export {
    timer,
    timerData
}