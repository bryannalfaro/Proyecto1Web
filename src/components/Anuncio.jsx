import React from 'react'
import '../styles/anuncio.css'
import glovo from '../images/glovo.png'
import uber from '../images/uber.png'

const Anuncio = () => (
  <div className="anuncio">
    <div className="anuncioi" />
    <div className="over" />
    <div className="apps">
      <h6>-</h6>
      <div className="deliver">
        <div className="glovo">
          <img src={glovo} alt="glovo" className="imageGlovo" />
        </div>

        <div className="uber">
          <img src={uber} alt="uber" className="imageUber" />
        </div>
      </div>
    </div>
  </div>
)

export default Anuncio
