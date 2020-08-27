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
    const search = new URLSearchParams(location.search)

    getPoints({
      uf: search.get('uf'),
      city: search.get('city')
    }).then(data => setPoints(data))
  }, [])

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
            <Point key={point.id} point={point} />
          ))}
        </div>
      </div>
    </Container>
  )
}

export default ListPoints
