import React from 'react'
import { Link } from 'react-router-dom'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <header className="header clearfix" align="center">
            <h2 className="text-muted">React-Redux App</h2>
        </header>
      <main role="main">
        <div className="jumbotron">
          <h2>Welcome to my React-Redux Sample</h2>
        </div>
        <center><Link to="/RegistryApp" className="btn btn-info"> Continue to Registry App </Link></center><br/>
        <center><Link to="/RedditApp" className="btn btn-info"> Continue to Reddit Consumption App </Link></center>
      </main>
    </div>
    )
  }
}
