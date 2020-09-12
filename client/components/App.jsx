import React from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import Spread from './Spread'



const App = (props) => {

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
