import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../../services/api'
import ibge from '../../services/ibge'
import Dropzone from '../../components/Dropzone'
import './style.css'

export default function Form() {
  const [items, setItems] = useState([])
  const [ufs, setUfs] = useState([])
  const [selectedUf, setSelectedUf] = useState('')
  const [cities, setCities] = useState([])
  const [selectedCity, setSelectedCity] = useState('')
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

  const handleInputChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value })
  }

  const handleSelectItem = e => {
    const item = Number(e.currentTarget.id)
    const alreadySelected = selectedItems.findIndex(i => i === item)

    if (alreadySelected >= 0) {
      setSelectedItems(selectedItems.filter(i => i !== item))

      e.currentTarget.classList.remove('container-items__item--selected')
    } else {
      setSelectedItems([...selectedItems, item])

      e.currentTarget.classList.add('container-items__item--selected')
    }
  }

  const handleSubmit = async event => {
    event.preventDefault()

    const { name, email, whatsapp } = formData
    const uf = selectedUf
    const city = selectedCity
    const items = selectedItems
    const data = new FormData()

    data.append('name', name)
    data.append('email', email)
    data.append('whatsapp', whatsapp)
    data.append('uf', uf)
    data.append('city', city)
    data.append('items', items.join(','))
    data.append('image', selectedFile)

    await api.post('points', data)

    alert('ok')

    history.push('/')
  }

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
