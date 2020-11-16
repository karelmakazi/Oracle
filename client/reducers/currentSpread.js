const intialState = {spread: null}

const currentSpread = (state = intialState, action) => {
  switch (action.type){
    case 'CURRENT_STATE':
      return {
        spread: action.spread
      }
      default:
        return intialState
  }
}

export default currentSpread