import {
    GET_TIMER,
    ID_CRONOMETER
} from './constTypesAction'

let timer;

export const startTimer = (timerData) => {

    const {
        id
    } = timerData

    return dispatch => {

        let secondsCounter = '00',
            minutesCounter = '00',
            hoursCounter = '00';

        timer = setInterval(() => {
            let seconds = (Number(secondsCounter) + 1).toString(),
                minutes = minutesCounter,
                hours = hoursCounter;

            if (Number(secondsCounter) == 59) {
                minutes = (Number(minutesCounter) + 1).toString();
                seconds = '00';
            }

            if (Number(minutesCounter) == 59) {
                hours = (Number(hoursCounter) + 1).toString();
                minutes = '00';
            }

            minutesCounter = minutes.length == 1 ? '0' + minutes : minutes;
            secondsCounter = seconds.length == 1 ? '0' + seconds : seconds;
            hoursCounter = hours.length == 1 ? '0' + hours : hours;

            dispatch({
                type: GET_TIMER,
                payload: {
                    id,
                    seconds: secondsCounter,
                    minutes: minutesCounter,
                    hours: hoursCounter
                }
            })

        }, 1000)
    }
}

export const sendIdTimerAction = (data = {}) => {
    return dispatch => {
        dispatch({
            type: ID_CRONOMETER,
            payload: data
        })
    }
}