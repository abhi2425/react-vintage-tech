import React from 'react'
import { Link } from 'react-router-dom'
const HomeHeader = () => (
   <header className='header'>
      <div className='header--content'>
         <h1 className='homeHeading'>Think,Code and deploy </h1>
         <div>
            <h4 className='homeText'>embrace your choices -we do</h4>
            <div className='ourProducts commonBtn'>
               <Link to='/products'>Our Products</Link>
            </div>
         </div>
      </div>
   </header>
)

export default HomeHeader
