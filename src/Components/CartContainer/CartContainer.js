import React from 'react'
import './CartContainer.css'
import CartItem from './CartItem/CartItem'
import EmptyCart from '../EmptyCart/EmptyCart'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../Contexts/CartContext/CartContext'
import { useUserContext } from '../../Contexts/UserContext'

const CartContainer = () => {
   const {
      cartItems,
      incrementHandler,
      decrementHandler,
      removeHandler,
      totalPrice,
   } = useCartContext()
   const { userData } = useUserContext()
   const cartItem = cartItems.map((cartItem, index) => (
      <CartItem
         {...cartItem}
         key={cartItem.id}
         incrementHandler={() => incrementHandler(index)}
         decrementHandler={() => decrementHandler(index)}
         removeHandler={() => removeHandler(index)}
      />
   ))

   if (!cartItem.length) {
      return <EmptyCart />
   }

   return (
      <section className='cartContainer'>
         <h1 className='cartHeading'>Your Cart</h1>
         <div className='cartBag'>{cartItem} </div>
         <h1 className='cartHeading'>
            Total-:
            <span className='span'>$ {+totalPrice.toFixed(2)}</span>
         </h1>
         <div className='cartButtons commonBtn'>
            <Link to='/products'>Continue Shopping</Link>
            <Link to={userData.token ? '/checkout' : '/login'}>
               {userData.token ? 'Checkout' : 'Login'}
            </Link>
         </div>
      </section>
   )
}

export default CartContainer
