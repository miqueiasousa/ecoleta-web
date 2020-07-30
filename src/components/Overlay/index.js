import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

export default function Overlay(props) {
  return <div className="overlay">{props.children}</div>
}

Overlay.propTypes = {
  children: PropTypes.element
}
