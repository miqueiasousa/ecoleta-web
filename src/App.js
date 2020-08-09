import React from 'react'

import PointsProvider from './context/PointsContext'
import Routes from './routes'
import './App.css'

function App() {
  return (
    <PointsProvider>
      <Routes />
    </PointsProvider>
  )
}

export default App
