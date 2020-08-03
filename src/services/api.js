import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3030'
})

export const getItems = async () => {
  const res = await api.get('items')

  return res.data
}

export const postPoint = async data => {
  const res = await api.post('points', data)

  return res.headers.location
}
