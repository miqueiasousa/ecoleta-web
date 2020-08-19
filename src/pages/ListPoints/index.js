import React, { useState, useEffect } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { Link, useLocation } from 'react-router-dom'

import { getPoints } from '../../services/PointService'
import Container from '../../components/Container'
import Header from '../../components/Header'
import BottomNavigation from '../../components/BottomNavigation'
import './style.css'

function ListPoints() {
  const [points, setPoints] = useState([])
  const location = useLocation()

  useEffect(() => {
    getPoints({
      uf: new URLSearchParams(location.search).get('uf'),
      city: new URLSearchParams(location.search).get('city')
    }).then(data => setPoints(data))
  })

  return (
    <Container>
      <Header
        navigation={
          <Link to="/">
            <BottomNavigation icon={<FiArrowLeft />} label="Voltar para home" />
          </Link>
        }
      />
      <div>
        <span className="counter">
          <b>{points.length} pontos</b> encontrados
        </span>
        <div className="container-points">
          {points.map(point => (
            <div key={point.id} className="point">
              <img
                src={point.image_url}
                alt={point.name}
                className="point__image"
              />
              <h1 className="point__name">{point.name}</h1>
              <span className="point__items">
                {point.items.map(item => item.title).join(', ')}
              </span>
              <ul className="point__address">
                <li>{`${point.uf}, ${point.city}`}</li>
                <li>{point.street}</li>
                <li>N° {point.number}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default ListPoints
