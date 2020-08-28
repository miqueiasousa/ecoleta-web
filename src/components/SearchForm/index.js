import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { bool } from 'prop-types'

import useUfFetching from '../../hooks/useUfFetching'
import useCityFetching from '../../hooks/useCityFetching'
import Button from '../../components/Button'
import Overlay from '../../components/Overlay'
import './style.css'

function SearchForm({ show }) {
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
    <Overlay show={show}>
      <form className="form-search" onSubmit={handleSubmit}>
        <h1 className="form-search__head">Pontos de coleta</h1>
        <div className="fieldset-search">
          <select
            id="uf"
            className="fieldset-search__input"
            name="uf"
            value={selectedUf}
            onChange={e => setSelectedUf(e.target.value)}
          >
            <option value="0">Selecione um estado</option>
            {ufs.map(uf => (
              <option key={uf} value={uf}>
                {uf}
              </option>
            ))}
          </select>
          <select
            id="city"
            className="fieldset-search__input"
            name="city"
            value={selectedCity}
            onChange={e => setSelectedCity(e.target.value)}
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
  )
}

SearchForm.propTypes = {
  show: bool
}

export default SearchForm
