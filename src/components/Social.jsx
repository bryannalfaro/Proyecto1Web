import React from 'react'
import '../styles/social.css'

const Social = () => (
  <div className="icons">
    <ul className="iconlist">
      <li className="li f">
        <button className="facebook" type="button" aria-label="face" />
      </li>
      <li className="li t">
        <button className="twitter" type="button" aria-label="twit" />
      </li>
      <li className="li i">
        <button className="instagram" type="button" aria-label="insta" />
      </li>
    </ul>
  </div>
)

export default Social
