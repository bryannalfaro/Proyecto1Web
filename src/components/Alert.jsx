import React, { useState, useEffect } from 'react'
import '../styles/alert.css'

const Alert = () => {
  const [show, setShow] = useState(true)
  const cookier = React.useRef()

  const cookies = () => {
    setShow(false)
  }

  useEffect(() => {
    if (show === false) {
      cookier.current.style.display = 'none'
    }
  })

  return (
    <div className="alert" ref={cookier}>
      <h5 className="cookie">Control de cookie</h5>
      <p className="parrafo">
        Este sitio usa cookies para almacenar información en su computadora.
        Algunas de estas cookies son
        esenciales para que nuestro sitio funcione y mejore la forma en que se usa.
        Al usar nuestro sitio, usted
        acepta los términos de nuestra política de privacidad.
      </p>
      <button className="close" onClick={cookies} type="button" tabIndex={0}>×</button>
    </div>
  )
}

export default Alert
