import React from 'react'
import '../styles/alert.css'

const Alert = () => (
  <div className="alert">
    <h5 className="cookie">Control de cookie</h5>
    <p className="parrafo">
      Este sitio usa cookies para almacenar información en su computadora.
      Algunas de estas cookies son
      esenciales para que nuestro sitio funcione y mejore la forma en que se usa.
      Al usar nuestro sitio, usted
      acepta los términos de nuestra política de privacidad.
    </p>
    <div className="close">×</div>
  </div>
)

export default Alert
