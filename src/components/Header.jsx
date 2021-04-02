import React from 'react'
import logo from '../images/san-martin.png'
import '../styles/header.css'

const Header = () => (
  <div className="header">
    <button aria-label="Save" type="button" className="login">Iniciar Sesion</button>
    <img src={logo} alt="logo" />
    <button aria-label="Save" type="button" className="whatss" />
    <button aria-label="Save" type="button" className="market">
      <span className="icon" />
      MI CANASTA
    </button>
  </div>
)

export default Header
