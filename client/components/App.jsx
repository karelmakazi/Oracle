import React from 'react'
import { Route } from 'react-router-dom'

import Welcome from './Welcome'
import Feedback from './Feedback'
import Spread from './Spread'
import Journal from './Journal'

const App = () => {
  return (
    <div className="flex h-screen justify-center items-center bg-green-700 font-custom">
      <Route exact path="/" component={Welcome} />
      <Route path="/spread" component={Spread} />
      <Route path="/journal" component={Journal} />
      <Route exact path="/feedback/:source" component={Feedback} />
    </div>
  )
}

export default App
