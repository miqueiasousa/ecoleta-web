import React from 'react'
import { element } from 'prop-types'

import './style.css'

function Wrapper({ children }) {
  return <div className="wrapper">{children}</div>
}

Wrapper.propTypes = {
  children: element
}

export default Wrapper
