import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const PointsContext = createContext()

const PointsProvider = props => {
  const [points, setPoints] = useState([])

  return (
    <PointsContext.Provider value={[points, setPoints]}>
      {props.children}
    </PointsContext.Provider>
  )
}

PointsProvider.propTypes = {
  children: PropTypes.element
}

export default PointsProvider
