import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'

import { HomeRouter, CreatePointRouter, ListPointsRouter } from './routes'
import PointsProvider from './context/PointsContext'

function App() {
  return (
    <PointsProvider>
      <BrowserRouter>
        <HomeRouter />
        <CreatePointRouter />
        <ListPointsRouter />
      </BrowserRouter>
    </PointsProvider>
  )
}

export default App
