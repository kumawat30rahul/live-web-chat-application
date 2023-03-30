import React from 'react'
import Login from '../Authentication/Login'
import Signup from '../Authentication/Signup'
import Chat from '../ChatPage/Chat'
import Sidebar from '../ChatPage/Sidebar'
import './home.css'

function Home() {
  return (
    <div className='home_page'>
      <div className='container'>
        <Sidebar />
        <Chat />
      </div>
    </div>
  )
}

export default Home