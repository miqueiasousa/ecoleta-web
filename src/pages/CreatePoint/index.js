import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'

import Container from '../../components/Container'
import Header from '../../components/Header'
import Link from '../../components/Link'
import Form from '../../components/Form'

import './style.css'

function CreatePoint() {
  return (
    <Container>
      <Header>
        <Link to="/" icon={FiArrowLeft} content="Voltar para home" />
      </Header>
      <div className="container-form">
        <Form />
      </div>
    </Container>
  )
}

export default CreatePoint
