import React from 'react'
import { string, number, array } from 'prop-types'

import './style.css'

function Point({ name, imageURL, uf, city, street, number, items }) {
  return (
    <div className="point">
      <img src={imageURL} alt={name} className="point__image" />
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
  name: string,
  imageURL: string,
  uf: string,
  city: string,
  street: string,
  number: number,
  items: array
}

export default Point
