import {
  ActionTypes,
  Actions
} from '../Actions'

const INITIAL_STATE = [{
  id: 0,
  seconds: '00',
  minutes: '00',
  hours: '00'
}]

const timer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.GET_TIMER:
      console.log(state)
      console.log(action)
      return []
    default:
      return state;
  }
}

export default timer