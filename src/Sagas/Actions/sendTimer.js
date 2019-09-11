import {
  GET_TIMER_COUNT
} from '../../Actions'

export const sendTimer = (payload) => ({
  payload,
  type: GET_TIMER_COUNT
})