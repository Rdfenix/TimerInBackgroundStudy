import {
  all,
  put,
  takeEvery,
  call
} from 'redux-saga/effects';
import {
  START_TIMER,
  GET_TIMER_COUNT
} from '../Actions';

export function* startCronometer(action = {}) {

  let secondsCounter = '00',
    minutesCounter = '00',
    hoursCounter = '00';

  let timer = yield call(setInterval, () => {
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

    put({
      type: GET_TIMER_COUNT,
      payload: "Test"
    });

  }, 1000)
};

function sendTimer() {
  return [
    put({
      type: GET_TIMER_COUNT,
      payload: "Test"
    })
  ];
}

export const timerSagas = all([
  takeEvery(START_TIMER, startCronometer)
])