import React, { useState } from 'react'
import { FiLogIn, FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import Container from '../../components/Container'
import Header from '../../components/Header'
import BottomNavigation from '../../components/BottomNavigation'
import OverlaySearch from '../../components/OverlaySearch'
import ActionButton from '../../components/ActionButton'
import './style.css'

function Home() {
  const [show, setShow] = useState(false)

  return (
    <div className="wrapper">
      <Container>
        <Header
          navigation={
            <Link to="/create-point">
              <BottomNavigation
                icon={<FiLogIn />}
                label="Cadastre um ponto de coleta"
              />
            </Link>
          }
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
          <ActionButton
            icon={<FiSearch />}
            label="Pesquisar pontos de coleta"
            onClick={() => setShow(true)}
          />
        </main>
      </Container>
      <OverlaySearch showOverlay={show} />
    </div>
  )
}

export default Home
