import React from 'react'
import { Route } from 'react-router-dom'

import Home from './pages/Home'
import CreatePoint from './pages/CreatePoint'

export function HomeRouter() {
  return <Route component={Home} path="/" exact />
}

export function CreatePointRouter() {
  return <Route component={CreatePoint} path="/create-point" exact />
}
