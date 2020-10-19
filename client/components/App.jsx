import React from 'react'
import { connect } from 'react-redux'

import Spread from './Spread'
import Journal from './Journal'

import { getJournalSpread } from '../api'


class App extends React.Component {
  state = {
    spread:null
  }

  componentDidMount(){
    this.fetchLastSpread()
  }

  fetchLastSpread(){
    return getJournalSpread()
    .then(spread => {
      this.setState({
        spread: spread
      })
    })
  }

  render() {
    let spreadObj = this.state.spread

    return (
      <div className=''>
        {spreadObj 
        ? spreadObj.journal != 'empty' 
          ? <Spread />
          : <Journal spread={spreadObj}/>
        : null}
      </div>
    ) 
  }
}

export default App
