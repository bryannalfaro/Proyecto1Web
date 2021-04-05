import React from 'react'
import '../styles/card.css'
import PropTypes from 'prop-types'
import image1 from '../images/1.jpg'
import image2 from '../images/2.jpg'
import image3 from '../images/3.jpg'
import image4 from '../images/4.jpg'
import image5 from '../images/5.jpg'
import image6 from '../images/6.jpg'
import image7 from '../images/7.jpg'
import image8 from '../images/8.jpg'
import image9 from '../images/9.jpg'
import image10 from '../images/10.jpg'
import image11 from '../images/11.jpg'
import image12 from '../images/12.jpg'

const Card = ({
  title, price, foto,
}) => {
  let image = 0
  if (foto === 1) {
    image = image1
  }
  if (foto === 2) {
    image = image2
  }
  if (foto === 3) {
    image = image3
  }
  if (foto === 4) {
    image = image4
  }
  if (foto === 5) {
    image = image5
  }
  if (foto === 6) {
    image = image6
  }
  if (foto === 7) {
    image = image7
  }
  if (foto === 8) {
    image = image8
  }
  if (foto === 9) {
    image = image9
  }
  if (foto === 10) {
    image = image10
  }
  if (foto === 11) {
    image = image11
  }
  if (foto === 12) {
    image = image12
  }

  const back = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '280px',
    backgroundColor: 'red',
  }

  return (
    <div className="card">
      <div className="imageP" style={back} />
      <h5 className="title">{title}</h5>
      <div className="price">{`Q.${price}.00`}</div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  foto: PropTypes.number.isRequired,
}

export default Card
