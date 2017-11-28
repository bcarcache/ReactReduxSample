import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import registryAppReducers from '../reducers'
import RegistryFormDisplay from '../containers/RegistryFormDisplay'
import RegistryTableDisplay from '../containers/RegistryTableDisplay'
import RegistryAppNavLink from '../components/RegistryAppNavLink'

let store = createStore(registryAppReducers)

export default class RegistryAppMain extends Component {
  render() {
    const { appStore, appHeader, jumboStr, NavTo } = this.props

    if (appStore === 'registration') {
      return (
        <div>
          <header className="header clearfix" align="center">
              <h2 className="text-muted">{appHeader}</h2>
          </header>
          <main role="main">
            <div className="jumbotron">
              <h2>{jumboStr}</h2>
            </div>
          </main>
          <Provider store={store}>
            <div>
              <RegistryFormDisplay />
              <br/>
              <RegistryTableDisplay />
            </div>
          </Provider>
          <RegistryAppNavLink navTo={NavTo}/>
        </div>
      )
    } else {
      return (
        <div>
          <header className="header clearfix" align="center">
              <h2 className="text-muted">{appHeader}</h2>
          </header>
          <main role="main">
            <div className="jumbotron">
              <h2>{jumboStr}</h2>
            </div>
          </main>
          <RegistryAppNavLink navTo={NavTo}/>
        </div>
      )
    }
  }
}
