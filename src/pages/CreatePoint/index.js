import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'

import Container from '../../components/Container'
import Header from '../../components/Header'
import RegisterForm from '../../components/RegisterForm'

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
      <RegisterForm />
    </Container>
  )
}

export default CreatePoint
