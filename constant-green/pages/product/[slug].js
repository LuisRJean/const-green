import React from 'react'
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

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
                        {/*<div className="small-images-conatiner">
                            {image?.map((image) => (
                                <img src={urlFor(item)} 
                                className=""
                                onMouseEnter=""
                                
                                />
                                
                            ))}
                        </div>  */}
                </div>

                <div className="product-details-desc">
                    <h1>Sunflowers</h1>
                    <div className="reviews">
                        <div>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar /> 
                            <AiOutlineStar />
                        </div>
                        <p>(20)</p>
                    </div>
                    <h4>Details: </h4>
                    <p>These sunflowers are grown in the best soil and are harvested at the right time to ensure the best quality. They are packed in a way that they are fresh and healthy when you receive them.</p>
                    <p className="price"> $10.00</p>
                    <div className="quantity">
                        <h3>Quantity: </h3>
                        <p className="quantity-desc">
                            <span className="minus" onClick="">
                                <AiOutlineMinus />

                            </span>
                          <span className="num" onClick="">
                                0

                          </span>
                          <span className="plus" onClick="">
                              <AiOutlinePlus />

                          </span>

                        </p>

                    </div>
                    <div className="buttons">
                        <button type="button" className="add-to-cart" OnClick="">Add to Cart</button>
                      <button type="button" className="buy-now" OnClick="">Buy Now</button>
                        
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