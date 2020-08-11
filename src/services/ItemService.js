import axios from 'axios'

const BASE_URL = 'http://localhost:3030'

export async function getItems() {
  const res = await axios.get(`${BASE_URL}/items`)

  return res.data
}
