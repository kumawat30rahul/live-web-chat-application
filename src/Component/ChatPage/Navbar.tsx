import React, { useContext,useEffect } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../Firbase/firbase'
import { AuthContext } from '../Context/AuthContext'

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)

  useEffect(()=>{console.log(currentUser)},[currentUser])
  return (
    <>
    {currentUser && currentUser.displayName &&
      <div className='navbar'>
      <span className="logo">Lama Chat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" className='nav_img'/>
        <span className='navbar_name'>{currentUser.displayName.split(' ')[0]}</span>
        <button onClick={()=>signOut(auth)}>logout</button>
      </div>
    </div>
    }
    </>
  )
}

export default Navbar