import React from 'react'

import './Form.scss';

const Form1 = ({handleClick}) => {
  return (
    <>
      <form className='form-container'>
        <div className='form-input'>
          <label htmlFor="fullname">Full Name</label>
          <input type="text" name='fullname' placeholder= 'Steve Jobs'id='fullname' />
        </div>
        <div className='form-input'>
          <label htmlFor="displayname">Display Name</label>
          <input type="text" name='displayname'  placeholder= 'Steve' id='displayname' />
        </div>

        <button onClick = {handleClick } type='submit'>Create Workspace</button>
      </form>
    </>
  );
}

export default Form1