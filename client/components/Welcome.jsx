import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getJournalSpread, clearSpread } from '../api'
import { setCurrentSpread } from '../actions'

class Welcome extends React.Component {
  state = {
    spread: null,
    journal: 'empty',
  }

  componentDidMount() {
    this.fetchLastSpread()
  }


  fetchLastSpread() {
    return getJournalSpread().then((spread) => {
      this.setState({
        spread: spread,
        journal: spread.journal
      })
      this.props.dispatch(setCurrentSpread(this.state.spread))
    })
  }

  handleClick(id){
    clearSpread(id)
    .then(
      this.fetchLastSpread()
    )
  }

  render() {
    let linkDirection = this.state.journal === 'empty' ? '/journal' : '/spread'
    let linkText = this.state.journal === 'empty' ? 'journal' : 'spread'

    return (
      <>
        <div className='greetingContentWrapper'>
          <div className='centeredCallout'>
            <h1>Welcome to Oracle</h1>
          </div>
          <div className='centeredButtonContainer'>
            <Link className='centeredButton' to={linkDirection}>
              Enter your {linkText}
            </Link>
            { this.state.journal === 'empty' &&
            <div
              className='centeredButton'
              onClick={() => this.handleClick(this.state.spread.spread_id)}>
              Clear Spread 
            </div>
            }
          </div>
        </div>
      </>
    )
  }
}

export default connect()(Welcome)
