import React from 'react'
import '../styles/navbar.css'

const Navbar = () => (
  <div className="nav">
    <ul className="ul">
      <li>
        <button className="button1" type="button">NUEVO</button>
      </li>
      <li>
        <button className="button2" type="button">PANADERÍA</button>
      </li>
      <li>
        <button className="button3" type="button">PASTELERÍA</button>
      </li>
      <li>
        <button className="button4" type="button">RESTAURANTE</button>
      </li>
      <li>
        <button className="button5" type="button">REGALOS</button>
      </li>
      <li>
        <button className="button6" type="button">MARKET</button>
      </li>
      <li>
        <button className="button7" type="button">CAFÉ</button>
      </li>

    </ul>
  </div>
)

export default Navbar
