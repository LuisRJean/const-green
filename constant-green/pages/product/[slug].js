import React from 'react'

import { client, urlFor } from '../../constant-green-farm/lib/client';

const ProductDetails = ({ product, products }) => {

    const { image, name, details, price } = product;
  return (
    <div>
        <div className="product-detail-container">
            <div>
                <div className="image-container">
                      <img src="https://cdn.sanity.io/images/763jxe6w/production/ac723f1630169acfef668141685c71e8902fe3d2-512x288.webp" />
                        </div>
                </div>
            </div>
    </div>
  )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

    const products = await client.fetch(query);

    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params: { slug } }) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]'

    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);

    console.log(product);

    return {
        props: { products, product }
    }
}

export default ProductDetails