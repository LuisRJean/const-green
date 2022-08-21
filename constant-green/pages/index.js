import React from 'react'

import { Product, FooterBanner, HeroBanner } from '../components';

const index = () => {
  return (
    <div>
      HeroBanner

      <div className="products-heading">
        <h2>Best selling microgreens</h2>
        <p>Range of greens</p>
      </div>

      <div className="products-container">
        {['PRODUCT 1', 'PRODUCT 2'].map((product) => product)}
      </div>

      FooterBanner
      </div>
  );
  }
export default index