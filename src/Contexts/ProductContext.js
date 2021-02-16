import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react'
import axios from 'axios'
import { productUrl as url } from '../Utils/url'
import { paginate } from '../Utils/paginate'
export const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState({
      isError: false,
      message: '',
   })
   const [products, setProducts] = useState([])
   const [featuredProducts, setFeaturedProducts] = useState([])

   const [sorted, setSorted] = useState([])
   const [page, setPage] = useState(0)
   const [filters, setFilters] = useState(() => ({
      search: '',
      category: 'All',
      shipping: false,
      price: 'All',
   }))
   const fetchProducts = useCallback(() => {
      setLoading(true)
      axios({
         method: 'GET',
         url,
      })
         .then((response) => {
            setLoading(false)
            const products = response.data
            const featuredProducts = products.filter((product) => product.featured === true)
            setProducts(products)
            setSorted(paginate(products))
            setFeaturedProducts(featuredProducts)
         })
         .catch((error) => {
            setLoading(false)

            setError({
               message: "😔 Can't Load Products ",
               isError: true,
            })
            console.log(error)
         })
   }, [url])

   useEffect(() => {
      fetchProducts()
   }, [url])

   useEffect(() => {
      let newProducts = [...products].sort((a, b) => a.price - b.price)
      const { category, search, price, shipping } = filters

      if (category !== 'All') {
         newProducts = newProducts.filter((item) => item.category === category.toLowerCase())
      }
      if (shipping !== false) {
         newProducts = newProducts.filter((item) => item.free_shipping === shipping)
      }
      if (search !== '') {
         newProducts = newProducts.filter((item) => {
            let title = item.title.toLowerCase().trim()
            return title.startsWith(search) ? item : null
         })
      }
      if (price !== 'All') {
         newProducts = newProducts.filter((item) => {
            if (price === 0) return item.price < 300
            else if (price === 300) return item.price > 300 && item.price < 650
            else return item.price > 650
         })
      }
      setPage(0)
      setSorted(paginate(newProducts))
   }, [filters, products])

   const changePageHandler = useCallback(
      (index) => {
         setPage(index)
      },
      [page],
   )
   const updateFiltersHandler = useCallback(
      (e) => {
         const type = e.target.type
         const filter = e.target.name
         const value = e.target.value
         let filterValue
         if (type === 'checkbox') {
            filterValue = e.target.checked
         } else if (type === 'radio') {
            value === 'All' ? (filterValue = value) : (filterValue = +value)
         } else {
            filterValue = value
         }
         setFilters({
            ...filters,
            [filter]: filterValue,
         })
      },
      [filters],
   )
   const value = useMemo(
      () => ({
         loading,
         error,
         products,
         featuredProducts,
         sorted,
         page,
         filters,
         changePageHandler,
         updateFiltersHandler,
      }),
      [
         loading,
         error,
         products,
         featuredProducts,
         sorted,
         page,
         filters,
         changePageHandler,
         updateFiltersHandler,
      ],
   )
   return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}

export const useProductContext = () => useContext(ProductContext)
