import React from 'react'
import Form from './Forms'
import Social from './Social'

import '../styles/footer.css'

const Footer = () => (
  <div className="footer">
    <div className="opciones">
      <ul className="lista">
        <li>SAN MARTÍN</li>
        <li>TÉRMINOS Y CONDICIONES</li>
        <li>PRIVACIDAD</li>
        <li>EMPLEOS</li>
        <li>UBICACIONES</li>
        <li>CONTACTO</li>
      </ul>
    </div>
    <Form />
    <Social />
  </div>
)

export default Footer
