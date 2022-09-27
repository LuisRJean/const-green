import React from 'react'
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>Copyright © 2022 Constant Green Farms, inc All rights reserved.</p>
      <p className="icons">
         <AiFillInstagram />
         <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer