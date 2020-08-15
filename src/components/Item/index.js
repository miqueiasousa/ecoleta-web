import React from 'react'
import { string, func } from 'prop-types'

import './style.css'

function Item({ id, label, imageSrc, onClick }) {
  return (
    <div id={id} className="item" onClick={onClick}>
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
