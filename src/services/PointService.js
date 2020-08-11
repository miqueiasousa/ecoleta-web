import axios from 'axios'

const BASE_URL = 'http://localhost:3030'

export async function postPoint(data) {
  const res = await axios.post(`${BASE_URL}/points`, data)

  return res.headers.location
}

export async function getPoints({ uf, city }) {
  const res = await axios.get(`${BASE_URL}/points?uf=${uf}&city=${city}`)

  return res.data
}
