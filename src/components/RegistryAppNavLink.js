import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavLink extends Component {
  render() {
    var linkText = ''
    if (this.props.navTo === '/') {
      linkText = 'Go Back Home'
    } else {
      linkText = 'Continue to Registration App'
    }
    return (
      <center>
        <Link to={this.props.navTo} className="btn btn-info">{linkText}</Link>
      </center>
    )
  }
}
