import React from 'react'
import { Link } from 'react-router-dom'
import { feedbackCompiler } from '../lib'

const Feedback = (props) => {

  const feedbackSource = props.match.params.source

 return (
      <>
        <div className='greetingContentWrapper'>
          <div className='centeredCallout'>
            <h1>{feedbackCompiler(feedbackSource)}</h1>
          </div>
          <div className='centeredButtonContainer'>
            <Link className='centeredButton' to={'/'}>
              Continue
            </Link>
          </div>
        </div>
      </>
    )
  
}

export default Feedback
 