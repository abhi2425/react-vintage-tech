import React, { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react'
import { useUserContext } from './UserContext'
import { authUrl as url } from '../Utils/url'
const FormContext = createContext()

export const FormContextProvider = ({ children }) => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [username, setUserName] = useState('')

   const [passError, setPassError] = useState({
      isError: '',
      message: '',
   })
   const [nameError, setNameError] = useState({
      isError: '',
      message: '',
   })
   const passRef = useRef()
   const nameRef = useRef()
   const emailRef = useRef()

   const [showSubmit, setShowSubmit] = useState(false)

   const { useLoginFunction, toggleLogin, setToggleLogin } = useUserContext()

   const onSubmitHandler = useCallback(
      (e) => {
         e.preventDefault()
         if (toggleLogin) {
            useLoginFunction(`${url}/users/login`, {
               email,
               password,
            })
            console.log('logIn')
         } else {
            useLoginFunction(`${url}/users`, {
               email,
               password,
               name: username,
            })
            console.log('signIn')
         }
         setEmail('')
         setPassword('')
         setUserName('')
      },
      [toggleLogin, useLoginFunction, url, email, password, username],
   )
   const toggleFormHandler = useCallback(() => {
      setToggleLogin((toggleLogin) => !toggleLogin)
      setShowSubmit(false)
      setEmail('')
      setPassword('')
      setUserName('')
   }, [toggleLogin])

   const onEmailChange = useCallback(
      (e) => {
         setEmail(e.target.value.toLowerCase())
         const condition = toggleLogin
            ? email && password.length >= 8
            : email && password.length >= 8 && username.length > 4
         if (condition) setShowSubmit(true)
         if (emailRef.current.value.length === 0) setShowSubmit(false)
      },
      [toggleLogin, email, password, emailRef, username],
   )

   const onPasswordChange = useCallback(
      (e) => {
         setPassword(e.target.value)

         if (passRef.current.value.length <= 8) {
            setPassError({
               isError: true,
               message: 'Too Short Password!!',
            })
            setShowSubmit(false)
         } else {
            setPassError({
               isError: false,
            })

            const condition = toggleLogin
               ? email && password.length >= 8
               : email && password.length >= 8 && username.length > 4
            if (condition) setShowSubmit(true)
         }

         if (passRef.current.value.length === 0) {
            setPassError({
               isError: false,
            })
         }
      },
      [email, password, setPassError],
   )

   const onUsernameChange = useCallback(
      (e) => {
         setUserName(e.target.value.toLowerCase())

         if (nameRef.current.value.length < 4 && !toggleLogin) {
            setNameError({
               isError: true,
               message: 'Too Short!!',
            })
            setShowSubmit(false)
         } else {
            setNameError({
               isError: false,
            })
            if (email && password.length > 10) setShowSubmit(true)
         }
         if (nameRef.current.value.length === 0) {
            setNameError({
               isError: false,
            })
         }
      },
      [nameRef, toggleLogin, email, password],
   )
   const value = useMemo(
      () => ({
         toggleLogin,
         showSubmit,
         email,
         password,
         username,
         passError,
         nameError,
         emailRef,
         passRef,
         nameRef,
         toggleFormHandler,
         onSubmitHandler,
         onEmailChange,
         onPasswordChange,
         onUsernameChange,
      }),
      [
         toggleLogin,
         showSubmit,
         email,
         password,
         username,
         passError,
         nameError,
         emailRef,
         passRef,
         nameRef,
         toggleFormHandler,
         onSubmitHandler,
         onEmailChange,
         onPasswordChange,
         onUsernameChange,
      ],
   )
   return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}

export const useFormContext = () => useContext(FormContext)
