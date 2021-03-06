import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { addJournal } from '../api'

import { runeMeaning } from '../lib'

class Journal extends React.Component {
  state = {
    journal: '',
    input: true,
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleClick = () => {
    this.setState({
      ...this.state,
      input: !this.state.input
    })
  }

  
  journalToDatabase(id) {
    let journalObject = {
      id,
      journal: this.state.journal,
    }
    addJournal(journalObject)
  }

  render() {
    const retSpread = this.props.spread
    const runeImageStyle = (name) =>
      name === 'reversed' ? 'runeImage runeReversed' : 'runeImage'
    const displayMode = (input) => 
      !input ? 'Enter Journal' : 'View Interpretations'

    return (
      <div className="mainComponentWrapper">

        <div className="symbolSelectWrapper">
        
          <div className="symbolSelectContainer">
            <div className={runeImageStyle(retSpread.pos1_aspect)}>
              {retSpread.pos1_image}
            </div>
            <h3>{retSpread.pos1_rune}</h3>
          </div>
          <div className="symbolSelectContainer">
            <div className={runeImageStyle(retSpread.pos1_aspect)}>
              {retSpread.pos2_image}
            </div>
            <h3>{retSpread.pos2_rune}</h3>
          </div>
          <div className="symbolSelectContainer">
            <div className={runeImageStyle(retSpread.pos1_aspect)}>
              {retSpread.pos3_image}
            </div>
            <h3>{retSpread.pos3_rune}</h3>
          </div>
        </div>

        <div className="panelContainer">
          {this.state.input && (
            <div className="inputPanel">
            <h1>ENTER JOURNAL</h1>
              <textarea
                rows='11'
                // cols='100'
                name="journal"
                value={this.state.journal}
                onChange={(e) => this.handleChange(e)}
              ></textarea>
           
            </div>
          )}

          {!this.state.input && <div className="infoPanelWrapper">

            <div className="infoPanel">
                <div className="symbolDisplay">
                  <div className={runeImageStyle(retSpread.pos3_aspect)}>
                    {retSpread.pos3_image}
                  </div>
                </div>
                <div className="symbolInfo">
                  <h3>The Overview</h3>
                  <h1>{retSpread.pos3_rune}</h1>
                  <p>{runeMeaning(retSpread.pos3_rune, retSpread.pos3_aspect)}</p>
                </div>
              </div>

            <div className="infoPanel">
              <div className="symbolDisplay">
                <div className={runeImageStyle(retSpread.pos2_aspect)}>
                  {retSpread.pos2_image}
                </div>
              </div>
              <div className="symbolInfo">
                <h3>The Challenge</h3>
                <h1>{retSpread.pos2_rune}</h1>
                <p>
                  {runeMeaning(retSpread.pos2_rune, retSpread.pos2_aspect)}
                </p>
              </div>
            </div>
              
              <div className="infoPanel">
                <div className="symbolDisplay">
                  <div className={runeImageStyle(retSpread.pos1_aspect)}>
                    {retSpread.pos1_image}
                  </div>
                </div>
                <div className="symbolInfo">
                  <h3>The Action</h3>
                  <h1>{retSpread.pos1_rune}</h1>
                  <p>
                    {runeMeaning(retSpread.pos1_rune, retSpread.pos1_aspect)}
                  </p>
                </div>
              </div>
            {/* </div> */}
          </div>}

        </div>
        <div className='centeredButtonContainer'>
          <div
            className='centeredButton'
            onClick={this.handleClick}>
            {displayMode(this.state.input)}
          </div>
          <Link
            className='centeredButton multiButton' 
              to={'/feedback/reflection'}
              onClick={() => this.journalToDatabase(retSpread.spread_id)}>
            Save Journal 
          </Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    spread: state.currentSpread.spread,
  }
}

export default connect(mapStateToProps)(Journal)
