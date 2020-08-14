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
