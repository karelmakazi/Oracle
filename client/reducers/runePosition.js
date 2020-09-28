const intialState = []

const runePosition = (state = intialState, action) => {
  switch (action.type){
    case 'RUNE_POSITION_1':
      return [
        { runePosition1: action.rune }
      ]

      case 'RUNE_POSITION_2':
        return [
          ...state,
          { runePosition2: action.rune }
        ]

      case 'RUNE_POSITION_3':
        return [
          ...state,
          { runePosition3: action.rune }
        ]
      
      default:
        return state
  }
}

export default runePosition