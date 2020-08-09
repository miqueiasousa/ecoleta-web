import React from 'react'
import { element, bool } from 'prop-types'

import './style.css'

function Overlay({ show, children }) {
  return <div className={`overlay ${show ? 'visible' : ''}`}>{children}</div>
}

Overlay.propTypes = {
  children: element,
  show: bool
}

export default Overlay
