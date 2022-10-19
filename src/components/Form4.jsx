import React from 'react'
import './Form.scss';


const Form4 = ({handleClick}) => {
  return (
    <>
    <form className='form-container'>
      <button onClick = {handleClick } type='submit'>Launch Eden</button>

   
   
    </form>
    </>
  )
}

export default Form4