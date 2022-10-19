import React from 'react'
import './Form.scss';
import { Box } from '@material-ui/core';
import logo1 from '../assets/logo1.PNG'
import logo2 from '../assets/logo2.PNG'

const Form3 = ({handleClick}) => {
  return (
    <>
    <form className='form-container'>
    
    <div className='box-container'>
      <Box className='box'  >
        <div><img src= {logo1} alt="logo1" /></div>
      <div className='box-heading'> For Myself </div>
      
      <div className='box-content'>Write Better. Think more clearly. Stay organised.</div>
    </Box>
    <Box className='box'  >
      <div><img src= {logo2} alt="logo1" /></div>
      <div className='box-heading'> With My Team </div>
      
      <div className='box-content'>Wiki, Docs, tasks & projects, all in one. </div>
    </Box>
    </div>
      
      <button onClick = {handleClick } type='submit'>Create Workspace</button>
    </form>
    </>
  )
}

export default Form3