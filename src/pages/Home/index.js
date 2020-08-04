import React, { useState, useEffect, useContext } from 'react'
import { FiLogIn, FiSearch } from 'react-icons/fi'
import { useHistory } from 'react-router-dom'
import { getPoints } from '../../services/api'
import { getUfs, getCities } from '../../services/ibge'
import Container from '../../components/Container'
import Header from '../../components/Header'
import Link from '../../components/Link'
import Overlay from '../../components/Overlay'
import { PointsContext } from '../../context/PointsContext'

import './style.css'

function Home() {
  const [show, setShow] = useState(false)
  const [ufs, setUfs] = useState([])
  const [selectedUf, setSelectedUf] = useState('')
  const [cities, setCities] = useState([])
  const [selectedCity, setSelectedCity] = useState('')
  const [, setPoints] = useContext(PointsContext)
  const history = useHistory()

  const handleSelectedUf = ({ target }) => {
    setSelectedUf(target.value)
  }

  const handleSelectedCity = ({ target }) => {
    setSelectedCity(target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()

    getPoints(selectedUf, selectedCity).then(points => {
      setPoints(points)
      history.push('/points')
    })
  }

  useEffect(() => {
    getUfs().then(ufs => {
      const serializedUfs = ufs.map(uf => uf.sigla)

      setUfs(serializedUfs)
    })
  }, [])

  useEffect(() => {
    getCities(selectedUf).then(cities => {
      const serializedCities = cities.map(city => city.nome)

      setCities(serializedCities)
    })
  }, [selectedUf])

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
          <div className="button-search" onClick={() => setShow(true)}>
            <span className="button-search__container-icon">
              <FiSearch className="button-search__icon" />
            </span>
            <span className="button-search__content">
              Pesquisar pontos de coleta
            </span>
          </div>
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
              onChange={handleSelectedUf}
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
              onChange={handleSelectedCity}
            >
              <option value="0">Selecione uma cidade</option>
              {cities.map(city => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <button className="form-search__btn" type="submit">
            Buscar
          </button>
        </form>
      </Overlay>
    </div>
  )
}

export default Home
