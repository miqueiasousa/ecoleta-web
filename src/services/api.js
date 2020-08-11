import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3030'
})

export async function getItems() {
  const res = await api.get('items')

  return res.data
}

export async function postPoint(data) {
  const res = await api.post('points', data)

  return res.headers.location
}

export async function getPoints(uf, city) {
  const res = await api.get(`points?uf=${uf}&city=${city}`)

  return res.data
}
