import React from 'react'
import { connect } from 'react-redux'

import Rune from './Rune'

class Spread extends React.Component {
  state = {
    position1: '',
    position2: '',
    position3: '',
    date: {}
  }

  render() {
    return (
      <>
      <Rune pos={'1'}/>
      <Rune pos={'2'}/>
      <Rune pos={'3'}/>
      </>
    )
  }
}

export default Spread 

//ADD API to write to database