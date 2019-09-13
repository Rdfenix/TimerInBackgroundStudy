export const makeGetTimer = (state) => {
  if (state.timer.id === state.timerData.id)
    return {
      hours: state.timer.hours,
      id: state.timer.id,
      minutes: state.timer.minutes,
      seconds: state.timer.seconds
    }
  // else
  //   return {
  //     hours: state.timer.hours,
  //     id: state.timer.id,
  //     minutes: state.timer.minutes,
  //     seconds: state.timer.seconds
  //   }
}