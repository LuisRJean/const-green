import React from 'react'

import { client, urlFor } from '../../constant-green-farm/lib/client';

const ProductDetails = ({ product, products }) => {

    const { image, name, details, price } = product;
  return (
    <div>
        <div className="product-detail-container">
            <div>
                <div className="image-container">
                    <img src="" />
                        </div>
                </div>
            </div>
    </div>
  )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "product"]` {
        slug
    }
    `
}    

export const getStaticProps = async ({ params: { slug }}) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productQuery = '*[_type == "product"]'

    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);

    console.log(product);

    return {
        props: { products, product }
    }
}
export default ProductDetails