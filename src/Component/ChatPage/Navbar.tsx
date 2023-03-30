import React, { useContext,useEffect } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../Firbase/firbase'
import { AuthContext } from '../Context/AuthContext'
import LogoutIcon from '@mui/icons-material/Logout';
import { Avatar } from '@mui/material';

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)

  useEffect(()=>{console.log(currentUser)},[currentUser])
  return (
    <>
    {currentUser && currentUser.displayName &&
      <div className='navbar'>
      <span className="logo">MEU CHAT</span>
      <div className="user">
        <Avatar src={currentUser.photoURL} alt="" className='nav_img'/>
        <span className='navbar_name'>{currentUser.displayName.split(' ')[0]}</span>
        <button className="logout_button" onClick={()=>signOut(auth)}><LogoutIcon /></button>
      </div>
    </div>
    }
    </>
  )
}

export default Navbar