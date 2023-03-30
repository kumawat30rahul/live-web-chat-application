import React from 'react'
import Login from '../Authentication/Login'
import Signup from '../Authentication/Signup'

function Home() {
  return (
    <div className='home_page'>
        <Signup />
        <Login />
    </div>
  )
}

export default Home