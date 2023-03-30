import React,{useState,useContext} from 'react'
import { Avatar } from '@mui/material'
import {collection,query,where,getDocs,getDoc,doc,setDoc,updateDoc,serverTimestamp} from "firebase/firestore";
import { db } from "../Firbase/firbase";
import { AuthContext } from '../Context/AuthContext';

function Search() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };

  const handleSelect = async () => {
    //check whether the group(chats in firestore) exists, if not create
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {}

    setUser(null);
    setUsername("")
  };

  const handleKey = (e)=>{
    console.log(e.code);
    e.code === "Enter" && handleSearch();
  }
  return (
    <div className='search'>
      <div className="searchForm">
        <input
          type="text"
          placeholder="Find a user"
          onKeyDown={handleKey}
          onInput={(e)=>setUsername(e.target.value)}
          value={username}
          className='search_input'
        />
      </div>
      {err && <span>User not found!</span>}
      {user && (
      <div className="userChat_div">
        <div className="userChat" onClick={handleSelect}>
        <Avatar alt="Remy Sharp" src={user.photoURL} />
          <div className="userChatInfo">
            <span>{user.displayName}</span>
          </div>
        </div>
      </div>
       )} 
    </div>
  )
}

export default Search

// user.displayName
// onClick={handleSelect}