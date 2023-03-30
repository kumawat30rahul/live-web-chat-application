import React, {useState,useContext} from 'react'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { AuthContext } from "../Context/AuthContext";
import { ChatContext } from "../Context/ChatContext";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../Firbase/firbase";
import  uuid  from 'react-uuid'
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

function Input() {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleSend = async () => {
    
    const uuidddd = uuid()

    if (img) {
      const storageRef = ref(storage, uuidddd);
      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) => {

        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuidddd,
                // text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      if (!text) {
        alert("Type something before sending")
        return;
      }
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuidddd,
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    setText("");
    setImg(null);
  };

  const sendChat = (e) => {
    e.code ==="Enter" && handleSend();
  }
  return (
    <div className='input_page'>
        <input 
          type='text' 
          placeholder='Type Something...' 
          className='type_input' 
          onKeyDown={sendChat}
          onChange={(e)=>setText(e.target.value)}
          value={text}
        />
        <div className='send'>
          <input type='file' id='files' style={{display:'none'}} onChange={(e) => setImg(e.target.files[0])}/>
          <label htmlFor='files'>
            <AttachFileIcon /> 
          </label>
          <button className='send_button' onClick={handleSend}>Send</button>
        </div>
    </div>
  )
}

export default Input