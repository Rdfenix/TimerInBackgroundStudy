import {
  GET_TIMER_COUNT
} from '../Actions';

const INITIAL_STATE = {
  // minutes: '',
  // seconds: ''
}

const timer = (state = INITIAL_STATE, action) => {
  const {
    payload
  } = action
  switch (action.type) {
    case GET_TIMER_COUNT:
      console.log(payload)
      //return {...state, [payload]}
    default:
      return state
  }
}

export default timer