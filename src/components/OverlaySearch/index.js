import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import { getPoints } from '../../services/api'
import { getUfs, getCities } from '../../services/ibge'
import { PointsContext } from '../../context/PointsContext'
import Overlay from '../Overlay'
import './style.css'

export default function OverlaySearch(props) {
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
    <Overlay show={props.showOverlay}>
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
  )
}

OverlaySearch.propTypes = {
  showOverlay: PropTypes.bool
}
