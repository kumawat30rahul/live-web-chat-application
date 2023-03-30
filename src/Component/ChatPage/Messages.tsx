import React,{useContext,useState,useEffect} from 'react'
import { doc, onSnapshot } from "firebase/firestore";
import Message from './Message'
import { ChatContext } from '../Context/ChatContext';
import { db } from '../Firbase/firbase';

function Messages() {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  return (
    <div className='messages'>
      {messages.map((m:any) => (
        <Message message={m} key={m.id} />
      ))}
    </div>
  )
}

export default Messages