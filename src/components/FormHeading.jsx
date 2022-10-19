
import React from 'react'
import './FormHeading.scss'

const FormHeading = ({title,subtitle}) => {


  return (
    <div className='form-heading-container'>

        <div className='form-heading-title heading'>{title}</div>
        <div className='form-heading-subtitle' >{subtitle}</div>
        
    </div>
  )
}

export default FormHeading