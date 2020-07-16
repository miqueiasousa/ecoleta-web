import React from 'react'
import PropTypes from 'prop-types'
import logo from '../../assets/logo.svg'
import './style.css'

export default function Header(props) {
  return (
    <header className="header">
      <img src={logo} alt="Ecoleta" />
      {props.children}
    </header>
  )
}

Header.propTypes = {
  children: PropTypes.element
}
