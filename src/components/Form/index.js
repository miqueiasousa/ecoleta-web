import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { func } from 'prop-types'

import { postPoint } from '../../services/PointService'
import { getItems } from '../../services/ItemService'
import { getCities } from '../../services/CityService'
import { getUfs } from '../../services/UfService'
import Dropzone from '../../components/Dropzone'
import TextField from '../../components/TextField'
import Select from '../../components/Select'
import Button from '../../components/Button'
import Item from '../../components/Item'
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

      currentTarget.classList.remove('item--selected')
    } else {
      setSelectedItems([...selectedItems, item])

      currentTarget.classList.add('item--selected')
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
          <div className="container-field__item-lg">
            <TextField
              id="name"
              label="Nome da entidade"
              onChange={handleInputChange}
            />
          </div>
          <div className="container-field__item-md">
            <TextField
              id="street"
              label="Endereço"
              onChange={handleInputChange}
            />
          </div>
          <div className="container-field__item-sm">
            <TextField
              id="number"
              label="Número"
              type="number"
              onChange={handleInputChange}
            />
          </div>
          <div className="container-field__item-sm">
            <Select id="uf" label="Estado (UF)" onChange={handleSelectedUf}>
              <option value="0">Selecione uma UF</option>
              {ufs.map(uf => (
                <option key={uf} value={uf}>
                  {uf}
                </option>
              ))}
            </Select>
          </div>
          <div className="container-field__item-md">
            <Select id="city" label="Cidade" onChange={handleSelectedCity}>
              <option value="0">Selecione uma cidade</option>
              {cities.map(city => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </Select>
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
            <Item
              key={item.id}
              id={item.id}
              label={item.title}
              imageSrc={item.image_url}
              onClick={handleSelectItem}
            />
          ))}
        </div>
      </div>
      <div className="form__btn-container">
        <Button label="Cadastrar ponto de coleta" />
      </div>
    </form>
  )
}

Form.propTypes = {
  showOverlay: func
}

export default Form
