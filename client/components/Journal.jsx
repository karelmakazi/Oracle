import React from 'react'

import { addJournal } from '../api'


class Journal extends React.Component {
  
  state = {
    journal:''
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
     })
   }

   //To Lib file
   journalToDatabase(id){
     let journalObject = {
       id,
       journal:this.state.journal
     }
     addJournal(journalObject)
   }

  render () {
    const retSpread = this.props.spread
    const runeImageStyle = (name) => (name === 'reversed') 
      ? 'runeImage runeReversed' : 'runeImage'

    return(
      <>
        <h1>Enter Your Journal</h1>
        <div className ='journalSymbolHolder'>
          <div className={runeImageStyle(retSpread.pos1_aspect)}>
            {retSpread.pos1_image}</div>
          <h3>{retSpread.pos1_rune}</h3>
          <div className={runeImageStyle(retSpread.pos1_aspect)}>
            {retSpread.pos2_image}</div>
            <h3>{retSpread.pos2_rune}</h3>
          <div className={runeImageStyle(retSpread.pos1_aspect)}>
           {retSpread.pos3_image}</div>
           <h3>{retSpread.pos3_rune}</h3>
        </div>
        <div>
            <textarea name='journal' value={this.state.journal}
              onChange={(e) => this.handleChange(e)}></textarea>
            <button onClick ={() => this.journalToDatabase(retSpread.spread_id)}>Save Journal</button>
        </div>
      </>
    )
  }
}
export default Journal