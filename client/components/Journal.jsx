import React from 'react'

class Journal extends React.Component {

  state = {

  }

  render () {
   console.log(this.props.spread);
    const retrievedSpread = this.props.spread
    return(
      <>
        <div className ='journalSymbolHolder'>
          <div className='journalSymbol'>
            {retrievedSpread.pos1_rune}
          </div>
          <div className='journalSymbol'>
            {retrievedSpread.pos2_rune}
          </div>
          <div className='journalSymbol'>
           {retrievedSpread.pos3_rune}
          </div>
        </div>
        <div>
          <form>
            <input type='text'></input>
            <button>Submit</button>
          </form>
        </div>
      </>
    )
  }
}

export default Journal