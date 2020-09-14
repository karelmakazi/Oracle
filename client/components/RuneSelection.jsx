import React from 'react'
import { connect } from 'react-redux'

class RuneSelection extends React.Component {
  state = {
  }

  render() {
    const runeList = this.props.runeList

    return (
      <div className=''>
        <h3>RuneSelection</h3>
        {runeList.runes.map((rune, key) => {
          return (
            <button className=''
              key={key}
              value = {rune.id}>
                {rune.name}
              </button>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    runeList: state.runeList
  }
}

export default connect(mapStateToProps)(RuneSelection)