import React, { useState, useEffect } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { useLocation } from 'react-router-dom'

import { getPoints } from '../../services/PointService'
import Container from '../../components/Container'
import Header from '../../components/Header'
import SectionPoints from '../../components/SectionPoints'

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
      <SectionPoints points={points} />
    </Container>
  )
}

export default ListPoints
