import React from 'react'
import { string, func } from 'prop-types'

import './style.css'

function TextField({ id, label, type, onChange }) {
  return (
    <div className="text-field">
      <label className="text-field__label" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        className="text-field__input"
        type={type || 'text'}
        name={id}
        onChange={onChange}
      />
    </div>
  )
}

TextField.propTypes = {
  id: string,
  label: string,
  type: string,
  onChange: func
}

export default TextField
