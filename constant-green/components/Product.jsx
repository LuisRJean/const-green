import React from 'react'
import Link from 'next/link'
import { urlFor } from '../constant-green-farm/lib/client';

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img
          />
        </div>

      </Link>
    </div>
  )
}

export default Product