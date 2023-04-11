import React from 'react'
import Login from './Login'
import Signup from './Signup'

function Auth() {
  return (
    <>
    <div className='auth'>
        <Signup />
        <Login />
    </div>
    <p>Demo Login: email = admin@gmail.com, password = 12345678</p>
    </>
  )
}

export default Auth