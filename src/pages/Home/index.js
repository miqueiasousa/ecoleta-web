import React from 'react'
import { FiLogIn, FiSearch } from 'react-icons/fi'
import Container from '../../components/Container'
import Header from '../../components/Header'
import Link from '../../components/Link'
import './style.css'

function Home() {
  return (
    <div className="wrapper">
      <Container>
        <Header>
          <Link
            to="/create-point"
            icon={FiLogIn}
            content="Cadastre um ponto de coleta"
          />
        </Header>
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
          <div className="button-search">
            <span className="button-search__container-icon">
              <FiSearch className="button-search__icon" />
            </span>
            <span className="button-search__content">
              Pesquisar pontos de coleta
            </span>
          </div>
        </main>
      </Container>
    </div>
  )
}

export default Home
