import Avatar from '@mui/material/Avatar'
// import React,{useRef,useContext,useEffect} from 'react'
// import { AuthContext } from "../Context/AuthContext";
// import { ChatContext } from "../Context/ChatContext";

// function Message({message}) {
//   const { currentUser } = useContext(AuthContext);
//   const { data } = useContext(ChatContext);

//   const ref = useRef();

//   useEffect(() => {
//     ref.current?.scrollIntoView({ behavior: "smooth" });
//     console.log(message)
//   }, [message]);

//   return (
//     <div 
//       ref={ref} 
//       className={`message ${message.senderId === currentUser.uid && "owner"}`}>
//       <div className="message_info">
//         <Avatar alt="Remy Sharp" 
//         src={
//             message.senderId === currentUser.uid
//               ? currentUser.photoURL
//               : data.user.photoURL
//           } />
//         <p>Just Now</p>
//       </div> 
//       <div className="message_content">
//         <p className='message_content_p'>{message.text}</p>
//         {message.img && <img src={message.img} alt="" className='msg_content_img'/>}
//       </div>
//     </div>
//   )
// }

// export default Message

import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../Context/AuthContext";
import { ChatContext } from "../Context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="message_info">
      <Avatar alt="Remy Sharp" 
        src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          } />
        <span>just now</span>
      </div>
      <div className="message_content">
      {message.text && (
        <p className='message_content_p'>{message.text}</p>
      )}
        {message.img && <img src={message.img} alt="" className="msg_content_img" />}
      </div>
    </div>
  );
};

export default Message;