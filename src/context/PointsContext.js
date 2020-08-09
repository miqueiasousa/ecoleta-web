import React, { createContext, useState } from 'react'
import { element } from 'prop-types'

const PointsContext = createContext()

const PointsContextProvider = ({ children }) => {
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

export { PointsContext, PointsContextProvider }
