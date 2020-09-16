import React from 'react'
import { connect } from 'react-redux'

class RuneDetail extends React.Component {
  state = {
    selRuneId: null,
    selRuneName: '',
    selRuneAspect: 'normal',
    revButtonText: 'Reverse'
  }


  onReverse(response) {
    this.aspectSwap(this.state.revButtonText)
  }

  runeToState(rune){
   this.setState({
    selRuneId: rune.id,
    selRuneName: rune.name,
   })
  }


  aspectSwap(button, current) {
    let newButtonText = ''
    let newRuneAspect = ''

    button
      ? newButtonText = (button === 'Reverse') ? 'Undo' : 'Reverse'
      : newButtonText = 'Reverse'

    current === 'normal'
      ? newRuneAspect = 'reversed'
      : newRuneAspect = 'normal'

    this.setState({
      revButtonText: newButtonText,
      selRuneAspect: newRuneAspect
    })
  }


  render() {
    const rune = this.props.rune
    const buttonText = this.state.revButtonText
    const currentAspect = this.state.selRuneAspect

    return (
      <>
        <h3>SELECTION: {rune.selRuneName}</h3>
        {rune.selRuneReverse
          ? <button onClick={() => { this.aspectSwap(buttonText, currentAspect) }}>
            {this.state.revButtonText}
            </button>
          : null}
          
      </>
    )
  }
}

export default connect()(RuneDetail)

//WILL DISPATCH ACTION