import React, { useState } from 'react'
import { FiLogIn, FiSearch } from 'react-icons/fi'

import Container from '../../components/Container'
import Header from '../../components/Header'
import OverlaySearch from '../../components/OverlaySearch'
import './style.css'

function Home() {
  const [show, setShow] = useState(false)

  return (
    <div className="wrapper">
      <Container>
        <Header
          navigation={{
            to: '/points/create',
            icon: <FiLogIn />,
            label: 'Cadastre um ponto de coleta'
          }}
        />
        <main className="main">
          <div className="content">
            <h1 className="content__head">
              Seu marketplace de coleta de resíduos.
            </h1>
            <p className="content__desc">
              Ajudamos pessoas a encontrarem pontos de coleta de forma
              eficiente.
            </p>
          </div>
          <button className="action-btn" onClick={() => setShow(true)}>
            <span className="action-btn__icon-container">
              <FiSearch />
            </span>
            <span className="action-btn__label">
              Pesquisar pontos de coleta
            </span>
          </button>
        </main>
      </Container>
      <OverlaySearch showOverlay={show} />
    </div>
  )
}

export default Home
