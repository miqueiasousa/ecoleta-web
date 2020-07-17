import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import './style.css'

export default function Link(props) {
  return (
    <RouterLink to={props.to} className="link">
      <props.icon className="link__icon" />
      {props.content}
    </RouterLink>
  )
}

Link.propTypes = {
  to: PropTypes.string,
  icon: PropTypes.element,
  content: PropTypes.string
}
