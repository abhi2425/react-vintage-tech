import React from 'react'
import './Loading.css'
import loader from '../../Assets/loading.gif'
const Loading = ({ className }) => (
   <article className={`loader ${className}`}>
      <p className='loading'>Loading...</p>
      <img src={loader} alt='Loading...' className='loadingImage' />
   </article>
)

export default Loading
