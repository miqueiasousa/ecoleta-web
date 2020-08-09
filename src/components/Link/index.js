import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { string, element } from 'prop-types'

import './style.css'

function Link({ to, Icon, content }) {
  return (
    <RouterLink to={to} className="link">
      <Icon className="link__icon" />
      {content}
    </RouterLink>
  )
}

Link.propTypes = {
  to: string,
  Icon: element,
  content: string
}

export default Link
