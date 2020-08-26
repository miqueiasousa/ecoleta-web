import React, { useState, useEffect } from 'react'

import { getCities } from '../services/CityService'

function useCityFetching(uf) {
  const [cities, setCities] = useState([])

  useEffect(() => {
    getCities(uf).then(data => {
      const serializedData = data.map(({ nome }) => nome)

      setCities(serializedData)
    })
  }, [uf])

  return { cities }
}

export default useCityFetching
