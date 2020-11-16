import { combineReducers } from 'redux'

import currentSpread from './currentSpread'
import runeList from './runeList'
import runePosition from './runePosition'


export default combineReducers({
  currentSpread,
  runeList,
  runePosition
})