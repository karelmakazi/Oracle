import React from 'react'
import { connect } from 'react-redux'

import RuneDetail from './RuneDetail'

class Rune extends React.Component {
  state = {
    selRuneId: null,
    selRuneName: '',
    selRuneReverse: null,
  }

  onSelect(rune) {
    this.setState({
      selRuneId: rune.id,
      selRuneName: rune.name,
      selRuneReverse: rune.reversible,
    })
  }

  clearSelection = () => {
    this.setState({
      selRuneId: null,
      selRuneName: '',
      selRuneReverse: null,
    })
  }

  render() {
    const runeList = this.props.runeList

    return (
      <div className=''>
        {!this.state.selRuneId
          ? runeList.runes.map((rune, key) => {
            return (
              <button className=''
                key={key}
                onClick={() => this.onSelect(rune)}>
                {rune.name}
              </button>
            )
          })
          : <RuneDetail 
            rune={this.state} 
            clear={this.clearSelection}/>
        }
      </div>

    )
  }
}


const mapStateToProps = (state) => {
  return {
    runeList: state.runeList
  }
}

export default connect(mapStateToProps)(Rune)