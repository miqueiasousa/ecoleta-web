import React, { useState } from 'react'
import { string, number, func, shape } from 'prop-types'

import './style.css'

function Item({ item, onClick }) {
  const [isSelected, setSelected] = useState(false)
  const { id, title, image_url } = item

  return (
    <div
      id={id}
      className={`item ${isSelected ? 'item--selected' : ''}`}
      onClick={e => {
        setSelected(!isSelected)
        onClick(e)
      }}
    >
      <img src={image_url} alt={title} />
      <span className="item__title">{title}</span>
    </div>
  )
}

Item.propTypes = {
  item: shape({
    id: number,
    image_url: string,
    title: string
  }),
  onClick: func
}

export default Item
