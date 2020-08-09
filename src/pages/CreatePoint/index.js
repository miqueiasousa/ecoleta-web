import React, { useState } from 'react'
import { FiArrowLeft, FiCheckCircle } from 'react-icons/fi'

import Container from '../../components/Container'
import Header from '../../components/Header'
import Link from '../../components/Link'
import Form from '../../components/Form'
import Overlay from '../../components/Overlay'
import './style.css'

function CreatePoint() {
  const [show, setShow] = useState(false)

  return (
    <>
      <Container>
        <Header>
          <Link to="/" Icon={FiArrowLeft} content="Voltar para home" />
        </Header>
        <div className="container-form">
          <Form showOverlay={setShow} />
        </div>
      </Container>
      <Overlay show={show}>
        <div className="box">
          <FiCheckCircle className="box__icon" />
          <span className="box__text">Cadastro concluído!</span>
        </div>
      </Overlay>
    </>
  )
}

export default CreatePoint
