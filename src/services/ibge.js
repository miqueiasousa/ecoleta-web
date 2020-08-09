import axios from 'axios'

const ibge = axios.create({
  baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades'
})

const getUfs = async () => {
  const res = await ibge.get('estados')

  return res.data
}

const getCities = async uf => {
  const res = await ibge.get(`estados/${uf}/municipios`)

  return res.data
}

export { getUfs, getCities }
