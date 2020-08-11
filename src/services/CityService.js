import axios from 'axios'

const BASE_URL = 'https://servicodados.ibge.gov.br/api/v1/localidades'

export async function getCities(uf) {
  const res = await axios.get(`${BASE_URL}/estados/${uf}/municipios`)

  return res.data
}
