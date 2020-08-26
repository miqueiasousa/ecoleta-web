import React, { useState, useEffect } from 'react'

import { getUfs } from '../services/UfService'

function useUfFetching() {
  const [ufs, setUfs] = useState([])

  useEffect(() => {
    getUfs().then(data => {
      const serializedData = data.map(({ sigla }) => sigla)

      setUfs(serializedData)
    })
  }, [])

  return { ufs }
}

export default useUfFetching
