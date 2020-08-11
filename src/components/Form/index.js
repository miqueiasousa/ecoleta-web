import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { func } from 'prop-types'

import { postPoint } from '../../services/api'
import { getItems } from '../../services/ItemService'
import { getUfs, getCities } from '../../services/ibge'
import Dropzone from '../../components/Dropzone'
import './style.css'

function Form({ showOverlay }) {
  const [formData, setFormData] = useState({
    name: '',
    street: '',
    number: ''
  })
  const [ufs, setUfs] = useState([])
  const [selectedUf, setSelectedUf] = useState('')
  const [cities, setCities] = useState([])
  const [selectedCity, setSelectedCity] = useState('')
  const [items, setItems] = useState([])
  const [selectedItems, setSelectedItems] = useState([])
  const [selectedFile, setSelectedFile] = useState()
  const history = useHistory()

  const handleSelectedUf = ({ target }) => {
    setSelectedUf(target.value)
  }

  const handleSelectedCity = ({ target }) => {
    setSelectedCity(target.value)
  }

  const handleInputChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value })
  }

  const handleSelectItem = ({ currentTarget }) => {
    const item = Number(currentTarget.id)
    const alreadySelected = selectedItems.find(i => i === item)

    if (alreadySelected) {
      setSelectedItems(selectedItems.filter(i => i !== item))

      currentTarget.classList.remove('container-items__item--selected')
    } else {
      setSelectedItems([...selectedItems, item])

      currentTarget.classList.add('container-items__item--selected')
    }
  }

  const handleSubmit = event => {
    event.preventDefault()

    const data = new FormData()

    data.append('name', formData.name)
    data.append('street', formData.street)
    data.append('number', formData.number)
    data.append('uf', selectedUf)
    data.append('city', selectedCity)
    data.append('items', selectedItems.join(','))
    data.append('image', selectedFile)

    postPoint(data).then(() => {
      showOverlay(true)

      setTimeout(() => history.push('/'), 2000)
    })
  }

  useEffect(() => {
    getItems().then(items => setItems(items))
  }, [])

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
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="form__head">Cadastro de ponto de coleta</h1>
      <Dropzone onFileUploaded={setSelectedFile} />
      <div className="fieldset">
        <div className="fieldset__header">
          <h2 className="fieldset__title">Dados da entidade</h2>
        </div>
        <div className="container-field">
          <div className="container-field__item-lg field">
            <label className="field__label" htmlFor="name">
              Nome da entidade
            </label>
            <input
              className="field__input"
              type="text"
              name="name"
              id="name"
              onChange={handleInputChange}
            />
          </div>
          <div className="container-field__item-md field">
            <label className="field__label" htmlFor="street">
              Endereço
            </label>
            <input
              className="field__input"
              type="text"
              name="street"
              id="street"
              onChange={handleInputChange}
            />
          </div>
          <div className="container-field__item-sm field">
            <label className="field__label" htmlFor="number">
              Número
            </label>
            <input
              className="field__input"
              type="number"
              name="number"
              id="number"
              onChange={handleInputChange}
            />
          </div>
          <div className="container-field__item-sm field">
            <label className="field__label" htmlFor="uf">
              Estado (UF)
            </label>
            <select
              className="field__input"
              name="uf"
              id="uf"
              onChange={handleSelectedUf}
            >
              <option value="0">Selecione uma UF</option>
              {ufs.map(uf => (
                <option key={uf} value={uf}>
                  {uf}
                </option>
              ))}
            </select>
          </div>
          <div className="container-field__item-md field">
            <label className="field__label" htmlFor="city">
              Cidade
            </label>
            <select
              className="field__input"
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
        </div>
      </div>
      <div className="fieldset">
        <div className="fieldset__header">
          <h2 className="fieldset__title">Items de coleta</h2>
          <span className="fieldset__detail">
            Selecione um ou mais itens abaixo
          </span>
        </div>
        <div className="container-items">
          {items.map(item => (
            <div
              key={item.id}
              id={item.id}
              className="container-items__item"
              onClick={handleSelectItem}
            >
              <img src={item.image_url} alt={item.title} />
              <span className="container-items__item-title">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
      <button className="form__btn" type="submit">
        Cadastrar ponto de coleta
      </button>
    </form>
  )
}

Form.propTypes = {
  showOverlay: func
}

export default Form
