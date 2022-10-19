import React from 'react'
import './Form.scss';

const Form2 = ({handleClick}) => {
  return (
    <>
    <form className='form-container'>
      <div className='form-input'>
        <label htmlFor="workspace-name">Workspace Name</label>
        <input type="text" name = 'workspace-name' placeholder='Eden' id='workspace-name' />
      </div>
      <div className='form-input'>
        <label htmlFor="workspace-url">Workspace url <span>(optional)</span></label>
        <div className='workspace-url-container'>
          <div className='workspace-url-base'>www.eden.com/</div>
          <input type="url" name = 'workspace-url' placeholder='Example' id='workspace-url' />
        </div>
        
      </div>
      <button onClick = {handleClick } type='submit'>Create Workspace</button>
    </form>
    </>
  )
}

export default Form2