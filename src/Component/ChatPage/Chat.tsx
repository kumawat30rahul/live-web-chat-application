import React from 'react'
import Messages from './Messages'
import VideocamIcon from '@mui/icons-material/Videocam';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Input from './Input'

function Chat() {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Sonthing Something</span>
        <div className="chatIcons">
          <VideocamIcon />
          <AddIcCallIcon />
          <MoreVertIcon />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat

//{data.user?.displayName}