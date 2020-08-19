import React, { useState, useEffect } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { Link, useLocation } from 'react-router-dom'

import { getPoints } from '../../services/PointService'
import Container from '../../components/Container'
import Header from '../../components/Header'
import BottomNavigation from '../../components/BottomNavigation'
import Point from '../../components/Point'
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
            <Point
              key={point.id}
              name={point.name}
              imageURL={point.image_url}
              uf={point.uf}
              city={point.city}
              street={point.street}
              number={point.number}
              items={point.items}
            />
          ))}
        </div>
      </div>
    </Container>
  )
}

export default ListPoints
