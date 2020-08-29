import React, { useState } from 'react'
import { FiLogIn, FiSearch } from 'react-icons/fi'

import Wrapper from '../../components/Wrapper'
import Container from '../../components/Container'
import Header from '../../components/Header'
import SearchForm from '../../components/SearchForm'
import './style.css'

function Home() {
  const [show, setShow] = useState(false)

  return (
    <Wrapper>
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
      <SearchForm show={show} />
    </Wrapper>
  )
}

export default Home
