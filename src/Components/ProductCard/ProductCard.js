import React, { memo } from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom'
const ProductCard = memo(({ image, title, price, id }) => (
   <article className='card'>
      <div className='productImage'>
         <img src={image.url} alt='Image' className='image--style' />
         <div className='details commonBtn'>
            <Link to={`/products/${id}`}>Details</Link>
         </div>
      </div>

      <div className='productContents'>
         <div className='productName'>{title}</div>
         <div className='productPrice'>{`$${price}`}</div>
      </div>
   </article>
))

export default ProductCard
