import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Rune from './Rune'
import SymbolDisplay from './SymbolDisplay'
import SelectPanel from './SelectPanel'

import { addSpread } from '../api'
import { spreadMaker, runeMeaning } from '../lib'

class oldSpread extends React.Component {
  state = {
    draw1Active: true,
    draw2Active: false,
    draw3Active: false,
  }

  spreadToDatabase() {
    let spreadObject = spreadMaker(this.props.currentSpread)
    addSpread(spreadObject)
  }

  drawNumber(number) {
    let drawSwitch = `draw${number}Active`
    this.setState({
      [drawSwitch]: !this.state[drawSwitch],
    })
  }

  render() {
    const runeImageStyle = (name) =>
      name === 'reversed' ? 'runeImage runeReversed' : 'runeImage'

    const pos1Data = this.props.spreadPos1
      ? this.props.spreadPos1.runePosition1
      : ''
    const pos2Data = this.props.spreadPos2
      ? this.props.spreadPos2.runePosition2
      : ''
    const pos3Data = this.props.spreadPos3
      ? this.props.spreadPos3.runePosition3
      : ''

    return (
      <div className="bg-blue-500 w-screen">
        <div className="flex bg-red-600">
          <div className="flex">
            {!this.state.draw3Active && (
              <button
                className="text-xl md:text-2xl lg:text-4xl cursor-pointer hover:text-green-300"
                onClick={() => this.drawNumber(3)}
              >
                Select
              </button>
            )}
            {this.state.draw3Active && <Rune pos={'3'} />}
          </div>

          <div className="flex">
            {!this.state.draw2Active && (
              <button
                className="text-xl md:text-2xl lg:text-4xl cursor-pointer hover:text-green-300"
                onClick={() => this.drawNumber(2)}
              >
                Select
              </button>
            )}

            {this.state.draw2Active && <Rune pos={'2'} />}
          </div>

          <div className="flex">
            <Rune pos={'1'} />
          </div>
        </div>

        <div className="panelContainer">
          <div className="infoPanelWrapper">
            {/* REFACTOR THE REST AFTER SASS*/}
            {!this.props.spreadPos3 && <SelectPanel drawNumber={3} />}

            {this.props.spreadPos3 && (
              <SymbolDisplay symbolData={pos3Data} drawNumber={3} />
            )}

            {!this.props.spreadPos2 && (
              <div className="selectPanel">
                <h3>Second Draw</h3>
                <h1>The Challenge</h1>
              </div>
            )}

            {this.props.spreadPos2 && (
              <div className="infoPanel">
                <div className="symbolDisplay">
                  <div className={runeImageStyle(pos2Data.selRuneAspect)}>
                    {pos2Data.selRuneImage}
                  </div>
                </div>
                <div className="symbolInfo">
                  <h3>The Challenge</h3>
                  <h1>{pos2Data.selRuneName}</h1>
                  <p>
                    {runeMeaning(pos2Data.selRuneName, pos2Data.selRuneAspect)}
                  </p>
                </div>
              </div>
            )}

            {!this.props.spreadPos1 && (
              <div className="selectPanel">
                <h3>First Draw</h3>
                <h1>The Overview</h1>
              </div>
            )}

            {this.props.spreadPos1 && (
              <div className="infoPanel">
                <div className="symbolDisplay">
                  <div className={runeImageStyle(pos1Data.selRuneAspect)}>
                    {pos1Data.selRuneImage}
                  </div>
                </div>

                <div className="symbolInfo">
                  <h3>The Overview</h3>
                  <h1>{pos1Data.selRuneName}</h1>
                  <p>
                    {runeMeaning(pos1Data.selRuneName, pos1Data.selRuneAspect)}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="centeredButtonContainer">
          {this.props.spreadPos3 && (
            <Link
              className="centeredButton"
              to={'/feedback/spread'}
              onClick={() => this.spreadToDatabase()}
            >
              Save your Spread
            </Link>
          )}
        </div>
      </div>
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

export default connect(mapStateToProps)(oldSpread)
