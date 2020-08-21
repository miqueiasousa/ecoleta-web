import React, { useState, useEffect } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { useLocation } from 'react-router-dom'

import { getPoints } from '../../services/PointService'
import Container from '../../components/Container'
import Header from '../../components/Header'
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
        navigation={{
          to: '/',
          icon: <FiArrowLeft />,
          label: 'Voltar para home'
        }}
      />
      <div className="points">
        <span className="points__counter">
          <b>{points.length} pontos</b> encontrados
        </span>
        <div className="points__container">
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
