import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../configureStore'
import RedditAppDisplay from '../containers/RedditAppDisplay'

const store = configureStore()

export default class RedditApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <RedditAppDisplay />
      </Provider>
    )
  }
}
