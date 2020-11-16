export const addRune = (position, rune) => {
  return {
    type: `RUNE_POSITION_${position}`,
    rune: rune,
  }
}

export const updateRuneList = (rune, passedList) => {
  return {
    type: 'UPDATE_RUNELIST',
    selRune: rune,
    passedList: passedList,
  }
}

export const setCurrentSpread = (spread) => {
  return {
    type: 'CURRENT_STATE',
    spread: spread
  }
}
