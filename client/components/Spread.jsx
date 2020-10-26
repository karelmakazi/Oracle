import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Rune from './Rune'

import { addSpread } from '../api'
import { spreadMaker } from '../lib'

class Spread extends React.Component {
  spreadToDatabase() {
    let spreadObject = spreadMaker(this.props)
    addSpread(spreadObject)
  }

  render() {
    return (
      <>
        <h1>Enter Your Spread</h1>
        <Rune pos={'1'} />
        <hr></hr>
        <Rune pos={'2'} />
        <hr></hr>
        <Rune pos={'3'} />
        <hr></hr>
        {this.props.spreadPos3 ? (
          <Link to={'/feedback/spread'} onClick={() => this.spreadToDatabase()}>
            SAVE ME
          </Link>
        ) : null}
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentSpread: state.runePosition,
    spreadPos1: state.runePosition[0],
    spreadPos2: state.runePosition[1],
    spreadPos3: state.runePosition[2],
  }
}

export default connect(mapStateToProps)(Spread)
