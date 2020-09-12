import React from 'react'
import { connect } from 'react-redux'

const App = (props) => {

  return (
    <div className=''>
      <h1>DERACISTING RUNES YO</h1>
        <Header navigation={props.navigation} />
        {props.navigation === 'spread'} ? <Spread /> : <Journal />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    navigation: state.navigation
  }
}

export default App connect(mapStateToProps)(App)
