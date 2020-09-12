import React from 'react'
import { connect } from 'react-redux'

class Rune extends React.Component {
  state ={
    selectedRune:'',
    selectedAspect:''
  }


  render(){
    console.log('RUNE', this.props.runeList);
    return(
      <div className=''>
        {this.props.runeList.map((rune, key) => {
          return <h3>{rune}</h3>
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

export default connect(mapStateToProps)(Rune)