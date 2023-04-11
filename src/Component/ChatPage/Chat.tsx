import React,{useContext} from 'react'
import Messages from './Messages'
import VideocamIcon from '@mui/icons-material/Videocam';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Input from './Input'
import { ChatContext } from "../Context/ChatContext";

function Chat() {
    const { data } = useContext(ChatContext);

  return (
    <div className='chat'>
      {data ? 
      <>
        <div className="chatInfo">
          <span>{data.user?.displayName}</span>
          <div className="chatIcons">
            <VideocamIcon className='icon'/>
            <AddIcCallIcon className='icon'/>
            <MoreVertIcon className='icon'/>
          </div>
        </div>
        <Messages />
        <Input />
        </>
       :
      <h1>Select a chat</h1>  
        }
    </div>
      
  )
}

export default Chat

//{data.user?.displayName}