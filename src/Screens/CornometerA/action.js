import {
  START_TIMER
} from '../../Actions';

export const startTimerAction = (payload = {}) => ({
  payload,
  type: START_TIMER
})