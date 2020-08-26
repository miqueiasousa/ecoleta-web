import React from 'react'
import { string, number, array, shape } from 'prop-types'

import './style.css'

function Point({ point }) {
  const { name, image_url, uf, city, street, number, items } = point

  return (
    <div className="point">
      <img src={image_url} alt={name} className="point__image" />
      <h1 className="point__name">{name}</h1>
      <span className="point__items">
        {items.map(({ title }) => title).join(', ')}
      </span>
      <ul className="point__address">
        <li>{`${uf}, ${city}`}</li>
        <li>{street}</li>
        <li>N° {number}</li>
      </ul>
    </div>
  )
}

Point.propTypes = {
  point: shape({
    name: string,
    image_url: string,
    uf: string,
    city: string,
    street: string,
    number: number,
    items: array
  })
}

export default Point
