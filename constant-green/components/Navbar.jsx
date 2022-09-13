import React from 'react';

import Link from 'next/link';
import { AiOutlineShop } from 'react-icons/ai';

import { Cart } from './';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Constant Green</Link>
      </p>

      <button type="button" className="cart-icon" onClick="">
        <AiOutlineShop />
        <span className="cart-items-qty">0</span>
      </button>
      </div>
  )
}

export default Navbar