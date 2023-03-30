import React from 'react'
import Login from './Login'
import Signup from './Signup'

function Auth() {
  return (
    <div className='auth'>
        <Signup />
        <Login />
    </div>
  )
}

export default Auth