

export const addRune = (position, rune) => {
  console.log('Pos', position);
  console.log('Rune', rune);
  return {
    type: 'RUNEATION',
    rune: rune
  }
}