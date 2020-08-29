import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { func } from 'prop-types'

import './style.css'

function SectionHome({ actionButtonOnClick }) {
  return (
    <div className="section-home">
      <div className="section-home__content">
        <h1 className="section-home__content-head">
          Seu marketplace de coleta de resíduos.
        </h1>
        <p className="section-home__content-desc">
          Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.
        </p>
      </div>
      <button className="action-btn" onClick={actionButtonOnClick}>
        <span className="action-btn__icon-container">
          <FiSearch />
        </span>
        <span className="action-btn__label">Pesquisar pontos de coleta</span>
      </button>
    </div>
  )
}

SectionHome.propTypes = {
  actionButtonOnClick: func
}

export default SectionHome
