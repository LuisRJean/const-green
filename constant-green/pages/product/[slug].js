import React from 'react'

import { client, urlFor } from '../../constant-green-farm/lib/client';

const ProductDetails = ({ products, product }) => {

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

export const getStaticProps = async ({ params: { slug }}) => {
    const query = `*[_type == "product" && slug.current == '${slug}'s][0]`;
    const productQuery = '*[_type == "product"]';

    const product = await client.fetch(query);
    const products = await client.fetch(productQuery);

    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);

    return {
        props: { products, product }
    }
}
export default ProductDetails