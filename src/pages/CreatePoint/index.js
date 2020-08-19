import React, { useState } from 'react'
import { FiArrowLeft, FiCheckCircle } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import Container from '../../components/Container'
import Header from '../../components/Header'
import BottomNavigation from '../../components/BottomNavigation'
import Form from '../../components/Form'
import Overlay from '../../components/Overlay'
import './style.css'

function CreatePoint() {
  const [show, setShow] = useState(false)

  return (
    <>
      <Container>
        <Header
          navigation={
            <Link to="/">
              <BottomNavigation
                icon={<FiArrowLeft />}
                label="Voltar para home"
              />
            </Link>
          }
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
