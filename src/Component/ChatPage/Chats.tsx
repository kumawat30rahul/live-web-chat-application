import { Avatar } from '@mui/material'
import React from 'react'

function Chats() {
  return (
    <div className='chats'>
      <div className="user_Chat" >
        <Avatar alt="Remy Sharp" src="https://www.freecodecamp.org/news/content/images/2020/12/DSC08166-2.jpg" />
          <div className="userChatInfo">
            <span>Rahul</span>
            <p>I need a new i phone</p>
          </div>
        </div>
    </div>
  )
}

export default Chats