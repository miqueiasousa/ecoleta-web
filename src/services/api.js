import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3030'
})

const getItems = async () => {
  const res = await api.get('items')

  return res.data
}

const postPoint = async data => {
  const res = await api.post('points', data)

  return res.headers.location
}

const getPoints = async (uf, city) => {
  const res = await api.get(`points?uf=${uf}&city=${city}`)

  return res.data
}

export { getItems, postPoint, getPoints }
