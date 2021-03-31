import React from 'react'
import logo from '../san-martin.png'
import '../header.css'

const Header = () => (
  <div className="header">
    <button aria-label="Save" type="button" className="login">Iniciar Sesion</button>
    <img src={logo} alt="logo" />
    <button aria-label="Save" type="button" className="whatss" />
  </div>
)

export default Header
