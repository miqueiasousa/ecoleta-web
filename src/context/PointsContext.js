import React, { createContext, useState } from 'react'
import { element } from 'prop-types'

const PointsContext = createContext()

const PointsProvider = props => {
  const [points, setPoints] = useState([])

  return (
    <PointsContext.Provider value={[points, setPoints]}>
      {props.children}
    </PointsContext.Provider>
  )
}

PointsProvider.propTypes = {
  children: element
}

export { PointsContext, PointsProvider as default }
