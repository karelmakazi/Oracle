import { combineReducers } from 'redux'

import navigation from './navigation'
import runeList from './runeList'


export default combineReducers({
  navigation,
  runeList,
  situation,
  challenge,
  action,
})