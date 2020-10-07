import React from 'react'
import { connect } from 'react-redux'

import Rune from './Rune'

class Spread extends React.Component {

  spreadToDatabase(){
    //REFACTOR
    const spreadPos1 = this.props.spreadPos1.runePosition1
    const spreadPos2 = this.props.spreadPos2.runePosition2
    const spreadPos3 = this.props.spreadPos3.runePosition3

    let spreadObject = {
      pos1_rune: spreadPos1.selRuneName,
      pos1_aspect: spreadPos1.selRuneAspect,
      pos2_rune: spreadPos2.selRuneName,
      pos2_aspect: spreadPos2.selRuneAspect,
      pos3_rune: spreadPos3.selRuneName,
      pos3_aspect: spreadPos3.selRuneAspect,
    }
  }

  render() {

    return (
      <>
      <Rune pos={'1'}/>
      <hr></hr>
      <Rune pos={'2'}/>
      <hr></hr>
      <Rune pos={'3'}/>
      <hr></hr>
      {
        this.props.spreadPos3
        ? <button onClick={() => this.spreadToDatabase()}> SAVE READING </button>
        : null
      }
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    currentSpread: state.runePosition,
    spreadPos1: state.runePosition[0],
    spreadPos2: state.runePosition[1],
    spreadPos3: state.runePosition[2]
  }
}

export default connect(mapStateToProps)(Spread) 