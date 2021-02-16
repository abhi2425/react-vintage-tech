import React, { useMemo } from 'react'
import ProductCard from '../ProductCard/ProductCard'
const ProductList = ({ products }) => {
   const productList = useMemo(() =>
      products.map((item) => <ProductCard key={item.title} {...item} />),
   )
   return <div className='productList'>{productList}</div>
}

export default ProductList
