import React from 'react'
import { element } from 'prop-types'

import './style.css'

function Container({ children }) {
  return <div className="container">{children}</div>
}

Container.propTypes = {
  children: element
}

export default Container
