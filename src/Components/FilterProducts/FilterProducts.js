import React from 'react'
import './FilterProducts.css'
import { useProductContext } from '../../Contexts/ProductContext'

const FilterProducts = ({ children }) => {
   const {
      filters: { category, price, search, shipping },
      updateFiltersHandler,
   } = useProductContext()
   return (
      <section className='filterContainer'>
         <form className='filterForm'>
            <article className='leftSection'>
               <div className='terms--style'>
                  <label htmlFor='searchTerm'>Search Term</label>
                  <input
                     type='text'
                     id='searchTerm'
                     value={search}
                     name='search'
                     onChange={(e) => updateFiltersHandler(e)}
                  />
               </div>
               <div className='terms--style'>
                  <label htmlFor='category'>Category</label>
                  <select
                     name='category'
                     id='category'
                     value={category}
                     name='category'
                     onChange={(e) => updateFiltersHandler(e)}>
                     <option>All</option>
                     <option>Phone</option>
                     <option>Radio</option>
                     <option>Computer</option>
                  </select>
               </div>
               <div>
                  <input
                     type='checkbox'
                     id='freeShipping'
                     checked={shipping}
                     name='shipping'
                     onChange={(e) => updateFiltersHandler(e)}
                  />
                  <label htmlFor='freeShipping'>Free Shipping</label>
               </div>
            </article>
            <article className='rightSection'>
               <p>Prices</p>
               <input
                  type='radio'
                  id='all'
                  value='All'
                  checked={price === 'All'}
                  name='price'
                  onChange={(e) => updateFiltersHandler(e)}
               />
               <label htmlFor='all'>All</label>
               <br />
               <input
                  type='radio'
                  id='tier-1'
                  value='0'
                  name='price'
                  checked={price === 0}
                  onChange={(e) => updateFiltersHandler(e)}
               />
               <label htmlFor='tier-1'>$0-$300</label>
               <br />
               <input
                  type='radio'
                  id='tier-2'
                  value='300'
                  name='price'
                  checked={price === 300}
                  onChange={(e) => updateFiltersHandler(e)}
               />
               <label htmlFor='tier-2'>$300-$600</label>
               <br />
               <input
                  type='radio'
                  id='tier-3'
                  value='650'
                  checked={price === 650}
                  name='price'
                  onChange={(e) => updateFiltersHandler(e)}
               />
               <label htmlFor='tier-3'>Over $600</label>
            </article>
         </form>
         {children}
      </section>
   )
}

export default FilterProducts
