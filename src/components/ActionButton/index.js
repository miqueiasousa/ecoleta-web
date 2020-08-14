import React from 'react'
import { element, string, func } from 'prop-types'

import './style.css'

function ActionButton({ icon, label, onClick }) {
  return (
    <button className="action-btn" onClick={onClick}>
      <span className="action-btn__icon-container">{icon}</span>
      <span className="action-btn__label">{label}</span>
    </button>
  )
}

ActionButton.propTypes = {
  icon: element,
  label: string,
  onClick: func
}

export default ActionButton
