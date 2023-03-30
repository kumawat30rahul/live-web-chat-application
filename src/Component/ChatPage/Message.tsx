import Avatar from '@mui/material/Avatar'
import React from 'react'

function Message() {
  return (
    <div className='message owner'>
      <div className="message_info">
        <Avatar alt="Remy Sharp" src="https://www.freecodecamp.org/news/content/images/2020/12/DSC08166-2.jpg" />
        <p>Just Now</p>
      </div> 
      <div className="message_content">
        <p className='message_content_p'>Hello</p>
        <img src='https://www.freecodecamp.org/news/content/images/2020/12/DSC08166-2.jpg' className='msg_content_img'/>
      </div>
    </div>
  )
}

export default Message