import React, { useState } from 'react'
import { string, func } from 'prop-types'

import './style.css'

function Item({ id, label, imageSrc, onClick }) {
  const [isSelected, setSelected] = useState(false)

  return (
    <div
      id={id}
      className={`item ${isSelected ? 'item--selected' : ''}`}
      onClick={e => {
        setSelected(!isSelected)
        onClick(e)
      }}
    >
      <img src={imageSrc} alt={label} />
      <span className="item__title">{label}</span>
    </div>
  )
}

Item.propTypes = {
  id: string,
  label: string,
  imageSrc: string,
  onClick: func
}

export default Item
