import runeData from '../../server/data/runes'

const initialState = runeData

const runeList = (state = initialState, action) => {
  switch (action.type){
    case 'UPDATE_RUNELIST':
      return {
        runes: runeFilter(action.selRune, action.passedList)
      }
        
    default: return state
  }
}

//PRODUCE FILTERED RUNELIST
function runeFilter (selRune, passedList) {
  return  passedList.runes.filter(rune => rune.name !== selRune)
}

export default runeList

