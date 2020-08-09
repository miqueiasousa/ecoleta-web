import React, { useContext } from 'react'
import { FiArrowLeft } from 'react-icons/fi'

import { PointsContext } from '../../context/PointsContext'
import Container from '../../components/Container'
import Header from '../../components/Header'
import Link from '../../components/Link'
import './style.css'

function ListPoints() {
  const [points] = useContext(PointsContext)

  return (
    <Container>
      <Header>
        <Link to="/" Icon={FiArrowLeft} content="Voltar para home" />
      </Header>
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
                <li>N° ${point.number}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default ListPoints
