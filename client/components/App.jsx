import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import Spread from './Spread'

import { getJournalSpread } from '../api'
 


const App = (props) => {

  useEffect(()=>{
    getJournalSpread()
    .then(res => console.log('hello', res))}
  )

  return (
    <div className=''>
        <Header navigation={props.navigation} />
        <Spread />
        {/* {props.navigation === 'spread'} ? <Spread /> : <Journal /> */}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    navigation: state.navigation
  }
}

export default connect(mapStateToProps)(App)
