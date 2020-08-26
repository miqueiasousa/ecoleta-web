import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { FiLogIn, FiSearch } from 'react-icons/fi'

import useUfFetching from '../../hooks/useUfFetching'
import useCityFetching from '../../hooks/useCityFetching'
import Container from '../../components/Container'
import Header from '../../components/Header'
import Button from '../../components/Button'
import Overlay from '../../components/Overlay'
import './style.css'

function Home() {
  const [show, setShow] = useState(false)
  const [selectedUf, setSelectedUf] = useState('')
  const [selectedCity, setSelectedCity] = useState('')
  const { ufs } = useUfFetching()
  const { cities } = useCityFetching(selectedUf)
  const history = useHistory()

  function handleSubmit(event) {
    event.preventDefault()

    history.push(`/points?uf=${selectedUf}&city=${selectedCity}`)
  }

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
      <Overlay show={show}>
        <form className="form-search" onSubmit={handleSubmit}>
          <h1 className="form-search__head">Pontos de coleta</h1>
          <div className="fieldset-search">
            <select
              className="fieldset-search__input"
              name="uf"
              id="uf"
              onChange={({ target }) => setSelectedUf(target.value)}
            >
              <option value="0">Selecione um estado</option>
              {ufs.map(uf => (
                <option key={uf} value={uf}>
                  {uf}
                </option>
              ))}
            </select>
            <select
              className="fieldset-search__input"
              name="city"
              id="city"
              onChange={({ target }) => setSelectedCity(target.value)}
            >
              <option value="0">Selecione uma cidade</option>
              {cities.map(city => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <Button label="Buscar" />
        </form>
      </Overlay>
    </div>
  )
}

export default Home
