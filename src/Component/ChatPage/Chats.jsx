import React, { useContext, useEffect, useState }from 'react'
import { Avatar } from '@mui/material'
import { doc, onSnapshot } from "firebase/firestore";
import {db} from '../Firbase/firbase'
import { AuthContext } from "../Context/AuthContext";
import { ChatContext } from '../Context/ChatContext';

function Chats() {
  
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);
  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  return (
    <div className='chats'>
      {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) => (
      <div 
        className="user_Chat" 
        key={chat[0]}
        onClick={() => handleSelect(chat[1].userInfo)}
      >
        <Avatar alt="Remy Sharp" src={chat[1].userInfo?.photoURL || ''} />
          <div className="userChatInfo">
            <span>{chat[1].userInfo?.displayName || ''}</span>
            <p className='last_message'>
              {(chat[1].lastMessage?.text || '').slice(0,37) + ((chat[1].lastMessage?.text || '').length > 35 ? "..." : "") }
            </p>
          </div>
        </div>
        ))}
    </div>
  )
}

export default Chats