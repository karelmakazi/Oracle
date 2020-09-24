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
    selRuneId: rune.selRuneId,
    selRuneName: rune.selRuneName,
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
    const runeImageStyle = this.state.revButtonText === 'Reverse' 
      ? 'runeImage'
      : 'runeImage runeReversed'

    
    return (
      <>
        <div className={runeImageStyle}>
          {rune.selRuneImage}
        </div>
        <h3>{rune.selRuneName}</h3>
        {rune.selRuneReverse
          ? <button onClick={() => { this.aspectSwap(buttonText, currentAspect) }}>
            {this.state.revButtonText}
            </button>
          : null}
          <button onClick={() => this.props.clear()}>Clear</button>
          <button onClick={() => this.runeToState(rune)}>Commit</button>
        

      </>
    )
  }
}

export default connect()(RuneDetail)

//WILL DISPATCH ACTION   








