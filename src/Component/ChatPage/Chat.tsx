import React,{useContext, useEffect} from 'react'
import Messages from './Messages'
import VideocamIcon from '@mui/icons-material/Videocam';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Input from './Input'
import { ChatContext } from "../Context/ChatContext";
// import Chat from '../../../src/Assest/chat.png'/

function Chat() {
    const { data } = useContext(ChatContext);
    useEffect(()=>{console.log(data.chatId, typeof data.chatId )},[data])

  return (
    <div className='chat'>
      {data.chatId !== 'null' ? 
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
        <img src="https://thumbs.dreamstime.com/b/man-woman-chatting-sitting-computers-office-social-media-communication-doodle-man-woman-chatting-sitting-115150786.jpg" alt="" />
        }
    </div>
      
  )
}

export default Chat

//{data.user?.displayName}