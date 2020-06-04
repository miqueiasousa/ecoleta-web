import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'

import { HomeRouter, CreatePointRouter } from './routes'

function App() {
  return (
    <BrowserRouter>
      <HomeRouter />
      <CreatePointRouter />
    </BrowserRouter>
  )
}

export default App
