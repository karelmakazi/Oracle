import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getJournalSpread, clearSpread } from '../api'
import { setCurrentSpread } from '../actions'

class Welcome extends React.Component {
  state = {
    spread: null,
    journal: 'empty',
    styleSwitch: 'on',
  }

  componentDidMount() {
    this.fetchLastSpread()
  }

  fetchLastSpread() {
    return getJournalSpread().then((spread) => {
      this.setState({
        spread: spread,
        journal: spread.journal,
      })
      this.props.dispatch(setCurrentSpread(this.state.spread))
    })
  }

  handleClick(id) {
    clearSpread(id).then(this.fetchLastSpread())
  }

  render() {
    let linkDirection = this.state.journal === 'empty' ? '/journal' : '/spread'
    let linkText = this.state.journal === 'empty' ? 'journal' : 'spread'

    return (
      <>
        <div className="text-center text-white uppercase">
          <h1 className="font-semibold  text-5xl md:text-7xl lg:text-9xl border-b-2 md:border-b-4">
            Welcome to Oracle
          </h1>

          <div className="flex justify-center space-x-5 md:space-x-10 lg:space-x-20 m-5 md:m-7 lg:m-10 ">
            <Link
              className="text-xl md:text-2xl lg:text-4xl cursor-pointer hover:text-green-300"
              to={linkDirection}
            >
              Enter your {linkText}
            </Link>

            {/* Logic check journal:empty when not styling */}
            {this.state.styleSwitch === 'on' && (
              <Link
                className="text-xl md:text-2xl lg:text-4xl cursor-pointer hover:text-green-300"
                onClick={() => this.handleClick(this.state.spread.spread_id)}
              >
                Clear Spread
              </Link>
            )}
          </div>
        </div>
      </>
    )
  }
}

export default connect()(Welcome)
