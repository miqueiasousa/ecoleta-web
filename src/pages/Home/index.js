import React, { useState } from 'react'
import { FiLogIn } from 'react-icons/fi'

import Wrapper from '../../components/Wrapper'
import Container from '../../components/Container'
import Header from '../../components/Header'
import SectionHome from '../../components/SectionHome'
import SearchForm from '../../components/SearchForm'

function Home() {
  const [show, setShow] = useState(false)

  return (
    <Wrapper>
      <Container>
        <Header
          navigation={{
            to: '/points/create',
            icon: <FiLogIn />,
            label: 'Cadastre um ponto de coleta'
          }}
        />
        <SectionHome actionButtonOnClick={() => setShow(true)} />
      </Container>
      <SearchForm show={show} />
    </Wrapper>
  )
}

export default Home
