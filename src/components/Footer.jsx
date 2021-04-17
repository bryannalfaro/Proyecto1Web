import React from 'react'
import Form from './Forms'
import Social from './Social'

import '../styles/footer.css'

const Footer = () => (
  <div className="footer">
    <div className="opciones">
      <ul className="lista">
        <li><button type="button" className="buttonF">SAN MARTÍN</button></li>
        <li><button type="button" className="buttonF">TÉRMINOS Y CONDICIONES</button></li>
        <li><button type="button" className="buttonF">PRIVACIDAD</button></li>
        <li><button type="button" className="buttonF">EMPLEOS</button></li>
        <li><button type="button" className="buttonF">UBICACIONES</button></li>
        <li><button type="button" className="buttonF">CONTACTO</button></li>
      </ul>
    </div>
    <Form />
    <Social />
  </div>
)

export default Footer
