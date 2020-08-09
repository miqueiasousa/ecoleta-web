import React from 'react'

import { PointsContextProvider } from './context/PointsContext'
import Routes from './routes'
import './App.css'

function App() {
  return (
    <PointsContextProvider>
      <Routes />
    </PointsContextProvider>
  )
}

export default App
