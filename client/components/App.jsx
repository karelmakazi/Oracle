import React from 'react'
import { Route } from 'react-router-dom'

import Welcome from './Welcome'
import Feedback from './Feedback'

const App = () => {
  return (
    <div>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/feedback/:source" component={Feedback} />
    </div>
  )
}

export default App
