import React from 'react'
import { string } from 'prop-types'

import './style.css'

function Button({ label }) {
  return <button className="btn">{label}</button>
}

Button.propTypes = {
  label: string
}

export default Button
