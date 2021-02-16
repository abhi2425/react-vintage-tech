import React from 'react'
import './Alert.css'
import { VscClose } from 'react-icons/vsc'
import { useUserContext } from '../../Contexts/UserContext'

const Modal = () => {
   const { alert, setAlert } = useUserContext()
   return (
      <div
         className={alert.isAlert ? 'overLay displayModal' : 'overLay'}
         onClick={() => setAlert({ isAlert: false })}>
         <div
            className={
               alert.isAlert ? 'modalContainer displayModal' + ` ${alert.type}` : 'modalContainer'
            }>
            <button className='closeModal' onClick={() => setAlert({ isAlert: false })}>
               <VscClose />
            </button>
            <p className='alertMessage'>{alert.message}</p>
         </div>
      </div>
   )
}

export default Modal
