import React from 'react'
import { element } from 'prop-types'

import logo from '../../assets/logo.svg'
import './style.css'

function Header({ children }) {
  return (
    <header className="header">
      <img src={logo} alt="Ecoleta" />
      {children}
    </header>
  )
}

Header.propTypes = {
  children: element
}

export default Header
