import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Dropzone from 'react-dropzone'
import { FiUpload, FiCheckCircle } from 'react-icons/fi'

import { postPoint } from '../../services/PointService'
import { getItems } from '../../services/ItemService'
import useUfFetching from '../../hooks/useUfFetching'
import useCityFetching from '../../hooks/useCityFetching'
import Button from '../Button'
import Item from '../Item'
import Overlay from '../Overlay'
import './style.css'

function RegisterForm() {
  const [name, setName] = useState('')
  const [street, setStreet] = useState('')
  const [number, setNumber] = useState('')
  const [selectedUf, setSelectedUf] = useState('')
  const [selectedCity, setSelectedCity] = useState('')
  const [items, setItems] = useState([])
  const [selectedItems, setSelectedItems] = useState([])
  const [file, setFile] = useState('')
  const [selectedFile, setSelectedFile] = useState({})
  const [show, setShow] = useState(false)
  const { ufs } = useUfFetching()
  const { cities } = useCityFetching(selectedUf)
  const history = useHistory()

  function handleDrop(acceptedFiles) {
    const [file] = acceptedFiles
    const fileUrl = URL.createObjectURL(file)

    setFile(fileUrl)
    setSelectedFile(file)
  }

  function handleSelectItem(event) {
    const selectItem = event.currentTarget.id
    const isSelected = selectedItems.find(i => i === selectItem)

    if (isSelected) {
      setSelectedItems(selectedItems.filter(i => i !== selectItem))
    } else {
      setSelectedItems([...selectedItems, selectItem])
    }
  }

  function handleSubmit(event) {
    event.preventDefault()

    const data = new FormData()

    data.append('name', name)
    data.append('street', street)
    data.append('number', number)
    data.append('uf', selectedUf)
    data.append('city', selectedCity)
    data.append('items', selectedItems.join(','))
    data.append('image', selectedFile)

    postPoint(data).then(() => {
      setShow(true)

      setTimeout(() => {
        history.push('/')
      }, 2000)
    })
  }

  useEffect(() => {
    getItems().then(data => setItems(data))
  }, [])

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="form__head">Cadastro de ponto de coleta</h1>
        <Dropzone onDrop={handleDrop} accept="image/*">
          {({ getRootProps, getInputProps }) => (
            <div className="dropzone" {...getRootProps()}>
              <input {...getInputProps()} />
              {file ? (
                <img src={file} alt="Point thumbnail" />
              ) : (
                <p>
                  <FiUpload />
                  Imagem do estabelecimento
                </p>
              )}
            </div>
          )}
        </Dropzone>
        <div className="fieldset">
          <div className="fieldset__header">
            <h2 className="fieldset__title">Dados da entidade</h2>
          </div>
          <div className="container-field">
            <div className="container-field__item-lg">
              <div className="field">
                <label className="field__label" htmlFor="name">
                  Nome da entidade
                </label>
                <input
                  id="name"
                  className="field__input"
                  type="text"
                  name="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="container-field__item-md">
              <div className="field">
                <label className="field__label" htmlFor="street">
                  Endereço
                </label>
                <input
                  id="street"
                  className="field__input"
                  type="text"
                  name="street"
                  value={street}
                  onChange={e => setStreet(e.target.value)}
                />
              </div>
            </div>
            <div className="container-field__item-sm">
              <div className="field">
                <label className="field__label" htmlFor="number">
                  Número
                </label>
                <input
                  id="number"
                  className="field__input"
                  type="number"
                  name="number"
                  value={number}
                  onChange={e => setNumber(e.target.value)}
                />
              </div>
            </div>
            <div className="container-field__item-sm">
              <div className="field">
                <label className="field__label" htmlFor="uf">
                  Estado (UF)
                </label>
                <select
                  id="uf"
                  className="field__input"
                  name="uf"
                  value={selectedUf}
                  onChange={e => setSelectedUf(e.target.value)}
                >
                  <option value="0">Selecione uma UF</option>
                  {ufs.map(uf => (
                    <option key={uf} value={uf}>
                      {uf}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="container-field__item-md">
              <div className="field">
                <label className="field__label" htmlFor="city">
                  Cidade
                </label>
                <select
                  id="city"
                  className="field__input"
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
              <Item key={item.id} item={item} onClick={handleSelectItem} />
            ))}
          </div>
        </div>
        <div className="form__btn-container">
          <Button label="Cadastrar ponto de coleta" />
        </div>
      </form>
      <Overlay show={show}>
        <div className="success">
          <FiCheckCircle className="success__icon" />
          <span className="success__text">Cadastro concluído!</span>
        </div>
      </Overlay>
    </>
  )
}

export default RegisterForm
