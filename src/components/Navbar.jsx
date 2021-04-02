import React from 'react'
import '../styles/navbar.css'

const Navbar = () => (
  <div className="nav">
    <ul className="ul">
      <li>
        <button className="button1" type="button">Nuevo</button>
      </li>
      <li>
        <button className="button2" type="button">Panadería</button>
      </li>
      <li>
        <button className="button3" type="button">Pastelería</button>
      </li>
      <li>
        <button className="button4" type="button">Restaurante</button>
      </li>
      <li>
        <button className="button5" type="button">Regalos</button>
      </li>
      <li>
        <button className="button6" type="button">Market</button>
      </li>
      <li>
        <button className="button7" type="button">Café</button>
      </li>

    </ul>
  </div>
)

export default Navbar
