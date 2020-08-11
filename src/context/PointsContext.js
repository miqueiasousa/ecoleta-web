import React, { createContext, useState, useContext } from 'react'
import { element } from 'prop-types'

const PointsContext = createContext()

export function PointsContextProvider({ children }) {
  const [points, setPoints] = useState([])

  return (
    <PointsContext.Provider value={[points, setPoints]}>
      {children}
    </PointsContext.Provider>
  )
}

PointsContextProvider.propTypes = {
  children: element
}

export function usePointsContext() {
  return useContext(PointsContext)
}
