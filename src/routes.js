import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import CreatePoint from './pages/CreatePoint'
import ListPoints from './pages/ListPoints'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={CreatePoint} path="/create-point" exact />
        <Route component={ListPoints} path="/points" exact />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
