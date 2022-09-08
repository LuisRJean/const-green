import React from 'react'
import Link from 'next/link';
import { urlFor } from '../constant-green-farm/lib/client';


const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img 
            src="https://cdn.sanity.io/images/763jxe6w/production/ac723f1630169acfef668141685c71e8902fe3d2-512x288.webp" 
            width={250}
            height={250}
            className="product-image"
            />
          <p className="product-name">Sunflowers</p>
          <p className="product-price">$10</p>
        </div>

      </Link>
    </div>
  )
}

export default Product