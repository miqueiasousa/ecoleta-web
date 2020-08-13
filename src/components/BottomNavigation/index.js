import React from 'react'
import { element, string } from 'prop-types'

import './style.css'

function BottomNavigation({ icon, label }) {
  return (
    <span className="navigation-btn">
      {icon}
      <span className="navigation-btn__label">{label}</span>
    </span>
  )
}

BottomNavigation.propTypes = {
  icon: element,
  label: string
}

export default BottomNavigation
