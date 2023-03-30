import React from 'react'
import AttachFileIcon from '@mui/icons-material/AttachFile';

function Input() {
  return (
    <div className='input_page'>
        <input type='text' placeholder='Type Something...' className='type_input'/>
        <div className='send'>
          <AttachFileIcon />
          <input type='file' id='files' />
          <label htmlFor='files'>
            Add 
          </label>
          <button>Send</button>
        </div>
    </div>
  )
}

export default Input