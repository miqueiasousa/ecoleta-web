import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

export default function Container(props) {
  return <div className="container">{props.children}</div>
}

Container.propTypes = {
  children: PropTypes.element
}
