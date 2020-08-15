import React from 'react'
import { string, element, func } from 'prop-types'

import './style.css'

function Select({ id, label, children, onChange }) {
  return (
    <div className="select">
      <label className="select__label" htmlFor={id}>
        {label}
      </label>
      <select id={id} className="select__input" name={id} onChange={onChange}>
        {children}
      </select>
    </div>
  )
}

Select.propTypes = {
  id: string,
  label: string,
  children: element,
  onChange: func
}

export default Select
