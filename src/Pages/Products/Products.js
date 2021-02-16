import React, { memo } from 'react'
import './Products.css'
import Loading from '../../Components/Loading/Loading'
import ProductList from '../../Components/ProductList/ProductList'
import FilterProducts from '../../Components/FilterProducts/FilterProducts'
import ChangePageButtons from '../../Components/FilterButtons/FilterButtons'
import { useProductContext } from '../../Contexts/ProductContext'

const Products = memo(() => {
   const { loading, error, sorted, page } = useProductContext()
   if (loading) return <Loading className='loading--center' />
   return (
      <main className='page'>
         <section className='pageSection'>
            <div className='searchSection'>
               <h1 className='pageHeading'>Search Products</h1>
               <FilterProducts>
                  <div className='totalProductCount'>Total Products-: {sorted.flat().length}</div>
               </FilterProducts>
            </div>

            {error.isError && <h1 className='error'>{error.message}</h1>}

            <div className='productSection'>
               <h1 className='pageHeading'>Our Products</h1>
               {sorted[page] ? (
                  <ProductList products={sorted[page]} />
               ) : (
                  <h1 className='notFound'>UnFortunately Search Criteria Doesn't Match.</h1>
               )}
               {sorted.length > 1 ? <ChangePageButtons /> : null}
            </div>
         </section>
      </main>
   )
})
export default Products
