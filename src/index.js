import React from 'react'
import { render } from 'react-dom'
import { HashRouter, Route } from 'react-router-dom'
import Home from './modules/Home'
import RegistryApp from './modules/RegistryApp'
import RedditApp from './modules/RedditApp'

render((
  <HashRouter>
  <div>
    <Route exact path="/" component={Home}/>
    <Route path="/RegistryApp" component={RegistryApp}/>
    <Route path="/RedditApp" component={RedditApp}/>
  </div>
  </HashRouter>
), document.getElementById('root'))
