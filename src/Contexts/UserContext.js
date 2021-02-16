import React, { createContext, useCallback, useContext, useMemo, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { authUrl as url } from '../Utils/url'
import { getUserFromLocalStorage } from '../Utils/localStorage'

const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
   const [toggleLogin, setToggleLogin] = useState(true)
   const [userData, setUserData] = useState(() => getUserFromLocalStorage())
   const [alert, setAlert] = useState({
      isAlert: false,
      message: '',
      type: '',
   })
   const history = useHistory()
   const useLoginFunction = useCallback((url, data) => {
      setAlert({
         isAlert: true,
         message: '🥱 Connecting With Server....',
         type: 'pending',
      })
      axios({
         url,
         method: 'POST',
         headers: { 'Access-Control-Allow-Origin': '*' },
         data: data,
      })
         .then((response) => {
            const { user, token } = response.data
            setUserData({ userName: user.name, token })
            setAlert({
               isAlert: true,
               message: toggleLogin
                  ? `😍 Welcome Back ${user.name}`
                  : `🤩 Thanks For Joining Us ${user.name} Go ahead and shop away Some vintage techs..`,
               type: 'success',
            })
            localStorage.setItem('user', JSON.stringify({ userName: user.name, token }))

            history.push('/products')
         })
         .catch((error) => {
            console.log(error.message)
            setAlert({
               isAlert: true,
               message: toggleLogin
                  ? `Wrong credentials Check it again...`
                  : `Server isn't responding!!`,
               type: 'danger',
            })
         })
   }, [])
   const useLogoutFunction = useCallback(() => {
      axios({
         method: 'POST',
         url: `${url}/users/logout`,
         headers: {
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${userData.token}`,
         },
      }).catch((error) => console.log(error.message))
      setUserData({ userName: null, token: null })
      localStorage.removeItem('user')
      history.replace('/')
   }, [userData.token, url])

   const value = useMemo(
      () => ({
         toggleLogin,
         alert,
         userData,
         setToggleLogin,
         useLoginFunction,
         useLogoutFunction,
         setAlert,
      }),
      [toggleLogin, alert, userData, useLoginFunction, useLogoutFunction],
   )
   return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export const useUserContext = () => useContext(UserContext)
