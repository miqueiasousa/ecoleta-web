import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'

import { HomeRouter, CreatePointRouter } from './routes'
import PointsProvider from './context/PointsContext'

function App() {
  return (
    <PointsProvider>
      <BrowserRouter>
        <HomeRouter />
        <CreatePointRouter />
      </BrowserRouter>
    </PointsProvider>
  )
}

export default App
