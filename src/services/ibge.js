import axios from 'axios'

const ibge = axios.create({
  baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades'
})

export async function getUfs() {
  const res = await ibge.get('estados')

  return res.data
}

export async function getCities(uf) {
  const res = await ibge.get(`estados/${uf}/municipios`)

  return res.data
}
