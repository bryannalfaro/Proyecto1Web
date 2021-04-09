import React from 'react'
import '../styles/forms.css'
import icon from '../images/email.png'

const Form = () => (
  <div className="form">
    <div className="content">

      <div className="titlemain">
        <div className="titlef">NEWSLETTER</div>
      </div>
      <div className="padreicon">
        <div className="inp">
          <input placeholder="Email" className="email" />
          <div className="emailicon">
            <img src={icon} alt="icon" className="iconem" />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Form
