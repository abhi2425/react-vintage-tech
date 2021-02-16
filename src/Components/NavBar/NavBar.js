import React, { useMemo } from 'react'
import './NavBar.css'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../Contexts/CartContext/CartContext'
import { useUserContext } from '../../Contexts/UserContext'
const NavBar = () => {
   const { totalCount } = useCartContext()
   const { userData } = useUserContext()
   const navLinks = useMemo(
      () => [
         {
            name: 'Home',
            url: '/',
            id: 'home123',
         },
         {
            name: 'About',
            url: '/about',
            id: 'about123',
         },
         {
            name: 'Products',
            url: '/products',
            id: 'products123',
         },

         {
            name: userData.token ? 'Logout' : 'Login',
            url: userData.token ? '/logout' : '/login',
            id: 'login123',
         },
         {
            name: <FaShoppingCart />,
            url: '/cart',
            id: 'cart123',
         },
      ],
      [],
   )
   if (userData.token) {
      navLinks.splice(3, 0, {
         name: 'Checkout',
         url: '/checkout',
         id: 'checkout123',
      })
   }

   const links = useMemo(() =>
      navLinks.map(({ name, url, id }) => (
         <button className={'navLink'} key={id}>
            <Link to={url}>{name}</Link>
         </button>
      )),
   )
   return (
      <nav className='navPosition'>
         <div className='logo'>
            <img
               src='https://react-tech-store-v2.netlify.app/static/media/logo.7ac3ba3a.svg'
               alt='Vintage Techs'
               className='logoImage'
            />
         </div>
         <ul className='navCenter'>
            {totalCount ? (
               <div className='totalProductsCount'>
                  <p>{totalCount}</p>
               </div>
            ) : null}
            {links}
         </ul>
      </nav>
   )
}

export default NavBar
