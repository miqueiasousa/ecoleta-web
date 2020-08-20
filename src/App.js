import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import CreatePoint from './pages/CreatePoint'
import ListPoints from './pages/ListPoints'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={ListPoints} path="/points" exact />
        <Route component={CreatePoint} path="/points/create" exact />
      </Switch>
    </BrowserRouter>
  )
}

export default App
