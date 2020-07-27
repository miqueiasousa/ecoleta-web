import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../../services/api'
import ibge from '../../services/ibge'
import Dropzone from '../../components/Dropzone'
import Map from '../Map'
import './style.css'

export default function Form() {
  const [items, setItems] = useState([])
  const [ufs, setUfs] = useState([])
  const [selectedUf, setSelectedUf] = useState('')
  const [cities, setCities] = useState([])
  const [selectedCity, setSelectedCity] = useState('')
  const [initialPosition, setInitialPosition] = useState([0, 0])
  const [selectedPosition, setSelectedPosition] = useState([0, 0])
  const [selectedItems, setSelectedItems] = useState([])
  const [selectedFile, setSelectedFile] = useState()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: ''
  })
  const history = useHistory()

  const handleSelectedUf = ({ target }) => {
    setSelectedUf(target.value)
  }

  const handleSelectedCity = ({ target }) => {
    setSelectedCity(target.value)
  }

  const handleMapClick = ({ latlng }) => {
    setSelectedPosition([latlng.lat, latlng.lng])
  }

  const handleInputChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value })
  }

  const handleSelectItem = id => {
    const alreadySelected = selectedItems.findIndex(item => item === id)

    if (alreadySelected >= 0) {
      setSelectedItems(selectedItems.filter(item => item !== id))
    } else {
      setSelectedItems([...selectedItems, id])
    }
  }

  const handleSubmit = async event => {
    event.preventDefault()

    const { name, email, whatsapp } = formData
    const uf = selectedUf
    const city = selectedCity
    const [latitude, longitude] = selectedPosition
    const items = selectedItems
    const data = new FormData()

    data.append('name', name)
    data.append('email', email)
    data.append('whatsapp', whatsapp)
    data.append('uf', uf)
    data.append('city', city)
    data.append('latitude', String(latitude))
    data.append('longitude', String(longitude))
    data.append('items', items.join(','))
    data.append('image', selectedFile)

    await api.post('points', data)

    alert('ok')

    history.push('/')
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) =>
      setInitialPosition([coords.latitude, coords.longitude])
    )
  }, [])

  useEffect(() => {
    api.get('items').then(({ data }) => setItems(data))
  }, [])

  useEffect(() => {
    ibge.get('estados').then(({ data }) => setUfs(data.map(uf => uf.sigla)))
  }, [])

  useEffect(() => {
    ibge
      .get(`estados/${selectedUf}/municipios`)
      .then(({ data }) => setCities(data.map(city => city.nome)))
  }, [selectedUf])

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="form__head">Cadastro de ponto de coleta</h1>
      <Dropzone onFileUploaded={setSelectedFile} />
      <div className="fieldset">
        <div className="fieldset__header">
          <h2 className="fieldset__title">Dados</h2>
        </div>
        <div className="container-field">
          <div className="container-field__item--lg field">
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
          <div className="field">
            <label className="field__label" htmlFor="email">
              E-mail
            </label>
            <input
              className="field__input"
              type="email"
              name="email"
              id="email"
              onChange={handleInputChange}
            />
          </div>
          <div className="field">
            <label className="field__label" htmlFor="whatsapp">
              Whatsapp
            </label>
            <input
              className="field__input"
              type="text"
              name="whatsapp"
              id="whatsapp"
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <div className="fieldset">
        <div className="fieldset__header">
          <h2 className="fieldset__title">Endereço</h2>
          <span className="fieldset__detail">Selecione o endereço no mapa</span>
        </div>
        <Map
          center={initialPosition}
          onClick={handleMapClick}
          marker={selectedPosition}
        />
        <div className="container-field">
          <div className="field">
            <label className="field__label" htmlFor="uf">
              Estado (UF)
            </label>
            <select
              className="field__input"
              value={selectedUf}
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
          <div className="field">
            <label className="field__label" htmlFor="city">
              Cidade
            </label>
            <select
              className="field__input"
              value={selectedCity}
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
        <ul className="items-grid">
          {items.map(item => (
            <li
              key={item.id}
              onClick={() => handleSelectItem(item.id)}
              className={selectedItems.includes(item.id) ? 'selected' : ''}
            >
              <img src={item.image_url} alt={item.title} />
              <span>{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <button className="form__btn" type="submit">
        Cadastrar ponto de coleta
      </button>
    </form>
  )
}
