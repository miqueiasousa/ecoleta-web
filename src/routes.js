import React from 'react'
import { Route } from 'react-router-dom'

import Home from './pages/Home'
import CreatePoint from './pages/CreatePoint'
import ListPoints from './pages/ListPoints'

export function HomeRouter() {
  return <Route component={Home} path="/" exact />
}

export function CreatePointRouter() {
  return <Route component={CreatePoint} path="/create-point" exact />
}

export function ListPointsRouter() {
  return <Route component={ListPoints} path="/points" exact />
}
