import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react'
import { getDataFromLocalStorage } from '../../Utils/localStorage'
const CartContext = createContext()

export const CartProvider = ({ children }) => {
   const [cartItems, setCartItems] = useState(() => getDataFromLocalStorage('cartItems'))
   const [totalCount, setTotalCount] = useState(() => getDataFromLocalStorage('totalCount'))
   const [totalPrice, setTotalPrice] = useState(() => getDataFromLocalStorage('totalPrice'))

   useEffect(() => {
      localStorage.setItem('cartItems', JSON.stringify(cartItems))
      localStorage.setItem('totalCount', JSON.stringify(totalCount))
      localStorage.setItem('totalPrice', JSON.stringify(totalPrice))
   }, [cartItems, totalCount, totalPrice])

   const removeCartItems = useCallback(
      (index) => {
         const filterCartItems = cartItems.filter((_, cartIndex) => cartIndex !== index)
         setCartItems(filterCartItems)
      },
      [cartItems],
   )

   const incrementHandler = useCallback(
      (index) => {
         cartItems[index].productCount += 1
         setCartItems(cartItems)
         setTotalCount(totalCount + 1)
         setTotalPrice(totalPrice + +cartItems[index].price)
      },
      [cartItems, totalCount, totalPrice],
   )

   const decrementHandler = useCallback(
      (index) => {
         cartItems[index].productCount -= 1
         setCartItems(cartItems)
         setTotalCount((totalCount) => totalCount - 1)
         setTotalPrice((totalPrice) => totalPrice - +cartItems[index].price)

         if (!cartItems[index].productCount) {
            removeCartItems(index)
         }
      },
      [cartItems, totalCount, totalPrice],
   )

   const removeHandler = useCallback(
      (index) => {
         setTotalCount((totalCount) => totalCount - cartItems[index].productCount)
         setTotalPrice(
            (totalPrice) => totalPrice - cartItems[index].productCount * cartItems[index].price,
         )
         removeCartItems(index)
      },
      [cartItems, totalCount, totalPrice],
   )
   const clearCartHandler = useCallback(() => {
      setCartItems([])
      setTotalCount(0)
      setTotalPrice(0)
   }, [])

   const value = useMemo(
      () => ({
         cartItems,
         totalCount,
         totalPrice,
         setCartItems,
         incrementHandler,
         decrementHandler,
         removeHandler,
         clearCartHandler,
         setTotalCount,
         setTotalPrice,
      }),
      [
         cartItems,
         totalCount,
         totalPrice,
         incrementHandler,
         decrementHandler,
         removeHandler,
         clearCartHandler,
      ],
   )
   return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
export const useCartContext = () => useContext(CartContext)
