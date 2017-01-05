import React from 'react'

import { render } from 'react-dom'

import { Router, Route, hashHistory } from 'react-router'

import App from './modules/App'

import Login from './modules/Login'

import Repos from './modules/Repos'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/repos" component={Repos}/>
    <Route path="/login" component={Login}/>
  </Router>
), document.getElementById('app'))
