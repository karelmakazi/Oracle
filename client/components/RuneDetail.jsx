import React from 'react'
import { addRune } from '../actions'
import { connect } from 'react-redux'

class RuneDetail extends React.Component {
  state = {
    selRuneId: this.props.rune.selRuneId,
    selRuneName: this.props.rune.selRuneName,
    selRuneAspect: 'normal',
    revButtonText: 'Reverse',
    runeCommited: false
  }

  submitRune(props) {
    this.setState({
      runeCommited: true
    })
    props.dispatch(addRune(this.props.pos, this.state))
  }

  //REFACTOR
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
        {!this.state.runeCommited
        ? <button onClick={() => this.submitRune(this.props)}>Commit</button>
        : null
        }
        
      </>
    )
  }
}

export default connect()(RuneDetail)

//WILL DISPATCH ACTION   








