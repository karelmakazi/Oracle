import React from 'react'
import { connect } from 'react-redux'

import RuneSelection from './RuneSelection'
import RuneDetail from './RuneDetail'

class Rune extends React.Component {
  state = {
    selectedRune: {
      name:'Fehu',
      reversible:true
    },
    selectedAspect: ''
  }

  render() {
    return (
      <div className=''>
        {!this.state.selectedRune
          ? <RuneSelection />
          : <RuneDetail selected={this.state.selectedRune} />}
      </div>
    )
  }
}


export default connect()(Rune)
