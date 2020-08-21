import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'

import Container from '../../components/Container'
import Header from '../../components/Header'
import Form from '../../components/Form'

function CreatePoint() {
  return (
    <Container>
      <Header
        navigation={{
          to: '/',
          icon: <FiArrowLeft />,
          label: 'Voltar para home'
        }}
      />
      <Form />
    </Container>
  )
}

export default CreatePoint
