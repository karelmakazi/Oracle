import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// import Spread from './Spread'
// import Journal from './Journal'

import { getJournalSpread } from '../api'
import { setCurrentSpread } from '../actions'

class Welcome extends React.Component {
  
  state = {
    spread: null,
    journal: 'empty'
  }

  componentDidMount() {
    this.fetchLastSpread()
  }

  fetchLastSpread() {
    return getJournalSpread()
    .then((spread) => {
      this.setState({
        spread: spread,
        journal: spread.journal
      })
      this.props.dispatch(setCurrentSpread(this.state.spread))
    })
  }

  render() {
    let spreadObj = this.state.spread
    let linkDirection = (this.state.journal === 'empty') ? '/journal' : '/spread'
    let linkText = (this.state.journal === 'empty') ? 'journal' : 'spread'

    // console.log('spreadObj', spreadObj);
    // console.log('state',this.state.journal);
    // console.log('linkDirection', linkDirection);
    
    return (
      <div className="mainComponentWrapper">
        <div className="greetingContentWrapper">
          <div className="centeredCallout">
            <h1>Welcome to Oracle</h1>
          </div>
          <div className="centeredButtonContainer">
            <Link className="centeredButton" 
              to={linkDirection}>Enter your {linkText}.
             </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Welcome)

{/* {spreadObj 
  ? (spreadObj.journal != 'empty' 
        ? (<Spread />) 
        : (<Journal spread={spreadObj} />)) 
  : null} */}