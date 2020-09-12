import runeData from '../../server/data/runes'

const initialState = Object.keys(runeData)

const runeList = (state = initialState, action) => {
  switch (action.type){
    default: return state
  }
}

export default runeList

