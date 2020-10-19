import React from 'react'

class Journal extends React.Component {

  state = {
    journal:''
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
     })
   }

  render () {
    const retrievedSpread = this.props.spread
    return(
      <>
        <h1>Enter Your Journal</h1>
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
            <textarea name='journal' value={this.state.journal}
              onChange={(e) => this.handleChange(e)}></textarea>
            <button>Submit</button>
        </div>
      </>
    )
  }
}
export default Journal