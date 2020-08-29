import React from 'react'
import { array } from 'prop-types'

import Point from '../Point'
import './style.css'

function SectionPoints({ points }) {
  return (
    <div className="points">
      <span className="points__counter">
        <b>{points.length} pontos</b> encontrados
      </span>
      <div className="points__container">
        {points.map(point => (
          <Point key={point.id} point={point} />
        ))}
      </div>
    </div>
  )
}

SectionPoints.propTypes = {
  points: array
}

export default SectionPoints
