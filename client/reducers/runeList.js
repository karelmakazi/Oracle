import runeData from '../../server/data/runes'

import { runeFilter } from '../lib'

const initialState = runeData

const runeList = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_RUNELIST':
      return {
        runes: runeFilter(action.selRune, action.passedList),
      }
    default:
      return state
  }
}

export default runeList
