import React from 'react'
import { connect } from 'react-redux' 

class RuneDetail extends React.Component {
  state ={ 

  }

  render () {
    console.log(this.props.selected);
    return(
      <>
      <h3>{this.props.selected.name}</h3>
      {this.props.selected.reversible 
      ? <button>Reverse</button>
      : null}
      </>
    )
  }
}

export default connect()(RuneDetail)

//WILL DISPATCH ACTION