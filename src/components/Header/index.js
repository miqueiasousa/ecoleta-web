import React from 'react'
import { element } from 'prop-types'

import logo from '../../assets/logo.svg'
import './style.css'

function Header({ navigation }) {
  return (
    <header className="header">
      <img src={logo} alt="Ecoleta" />
      {navigation}
    </header>
  )
}

Header.propTypes = {
  navigation: element
}

export default Header
