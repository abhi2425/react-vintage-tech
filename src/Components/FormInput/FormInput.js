import React from 'react'
import './FormInput.css'

const FromInput = ({ label, type, onChangeHandler, value, reference, children }) => (
   <div className='form--Control'>
      <label htmlFor={label} className='label'>
         {label}
      </label>
      <input
         type={type}
         placeholder={label}
         name={label}
         id={label}
         value={value}
         ref={reference}
         onChange={(e) => onChangeHandler(e)}
         className='textInput'
      />
      {children}
   </div>
)

export default FromInput
