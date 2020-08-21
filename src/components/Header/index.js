import React from 'react'
import { shape, element, string } from 'prop-types'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.svg'
import './style.css'

function Header({ navigation }) {
  return (
    <header className="header">
      <img src={logo} alt="Ecoleta" />
      <Link to={navigation.to}>
        <span className="navigation-btn">
          {navigation.icon}
          <span className="navigation-btn__label">{navigation.label}</span>
        </span>
      </Link>
    </header>
  )
}

Header.propTypes = {
  navigation: shape({
    to: string,
    icon: element,
    label: string
  })
}

export default Header
