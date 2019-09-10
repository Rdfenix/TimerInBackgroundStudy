const teste = (state = {}, action) => {
  switch (action.type) {
    case 'TESTE':
      return {}
      default:
        return state;
  }
}

export default teste