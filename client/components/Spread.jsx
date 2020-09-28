import React from 'react'
import { connect } from 'react-redux'

import Rune from './Rune'

class Spread extends React.Component {

  spreadToDatabase(){
    let spreadObject = {
        position1: this.props.spreadPos1,
        position2: this.props.spreadPos2,
        position3: this.props.spreadPos3
    }
    console.log('TO THE DB HOOO', spreadObject);
  }


  render() {

    return (
      <>
      <Rune pos={'1'}/>
      <Rune pos={'2'}/>
      <Rune pos={'3'}/>
      <hr></hr>
      {
        this.props.spreadPos3
        ? <button onClick={() => this.spreadToDatabase()}> 
            SAVE READING </button>
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