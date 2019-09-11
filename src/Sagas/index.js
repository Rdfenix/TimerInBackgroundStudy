import {
  all
} from 'redux-saga/effects'

import {
  timerSagas
} from './timerSagas'

export default function* rootSaga() {
  yield all([
    timerSagas
  ]);
}