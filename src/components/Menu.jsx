import React from 'react'
import PropTypes from 'prop-types'
import '../styles/menu.css'
import Card from './Card'

const Menu = ({
  title3, title4, title2, foto, foto2, foto3, title, see,
}) => (
  <div className="contenedor">
    <h2 className="texto">{title}</h2>
    <div className="cards">
      <Card title={title2} price={150} foto={foto} />
      <Card title={title3} price={150} foto={foto2} />
      <Card title={title4} price={150} foto={foto3} />
    </div>
    <button className="see" type="button">{see}</button>
  </div>
)

Menu.propTypes = {
  see: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  foto: PropTypes.number.isRequired,
  foto2: PropTypes.number.isRequired,
  foto3: PropTypes.number.isRequired,
  title3: PropTypes.string.isRequired,
  title4: PropTypes.string.isRequired,
}

export default Menu
