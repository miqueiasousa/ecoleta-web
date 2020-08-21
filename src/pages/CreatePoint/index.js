import React, { useState } from 'react'
import { FiArrowLeft, FiCheckCircle } from 'react-icons/fi'

import Container from '../../components/Container'
import Header from '../../components/Header'
import Form from '../../components/Form'
import Overlay from '../../components/Overlay'
import './style.css'

function CreatePoint() {
  const [show, setShow] = useState(false)

  return (
    <>
      <Container>
        <Header
          navigation={{
            to: '/',
            icon: <FiArrowLeft />,
            label: 'Voltar para home'
          }}
        />
        <Form showOverlay={setShow} />
      </Container>
      <Overlay show={show}>
        <div className="success">
          <FiCheckCircle className="success__icon" />
          <span className="success__text">Cadastro concluído!</span>
        </div>
      </Overlay>
    </>
  )
}

export default CreatePoint
