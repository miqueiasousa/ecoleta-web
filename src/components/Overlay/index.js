import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

export default function Overlay(props) {
  return props.show ? (
    <div className="overlay visible">{props.children}</div>
  ) : (
    <div className="overlay">{props.children}</div>
  )
}

Overlay.propTypes = {
  children: PropTypes.element,
  show: PropTypes.bool
}
