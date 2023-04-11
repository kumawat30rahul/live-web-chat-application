import React from 'react'
import Dialog from '@mui/material/Dialog'
import Button from '@mui/material/Button'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import './login.css'
import { doc, setDoc } from "firebase/firestore"; 
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firbase/firbase";
import {useNavigate} from 'react-router-dom'



function Login() {
  const [open,setOpen] = React.useState(false)
  const [error,setError] = React.useState(false)
  const [loading,setLoading] = React.useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const email = e.target[0].value
    const password = e.target[1].value

    try{
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    }catch{
      setError(true);
    }
  }
  return (
    <>
        <Button 
           onClick={()=>setOpen(true)}
           variant="contained"
           sx={{
            margin: 2,
            fontSize: 24,
            backgroundColor: '#35b7fe',
            color: 'black'
          }}
          className="btn"
          >Login</Button>
        <Dialog 
            open={open} 
            onClose={()=> setOpen(false)}
            aria-labelledby='dialog-title'
            aria-describedby='dialog-description'
            className='dialog'
            // maxWidth='lg'
        >
            <DialogTitle 
              sx={{
                color: '#35b7fe',
                fontWeight: '900',
                lineHeight: '25px',
                margin: '0 auto' 
              }} 
              id="dialog-title"
              >
                Welcome Back.
              </DialogTitle>
            <DialogContent
              sx={{
                width: '300px'
              }}
              className='dialog_content'
            >
                <DialogContentText 
                  id="dialog-description"
                >
                  <div className='inputs'>
                            <form onSubmit={handleSubmit}>
                                <div className='input_div'>
                                    <label htmlFor='emailId'>Email Id</label>
                                    <input type='email' className='email_id input' placeholder='Email Id' name='emailId' required/>
                                    <label htmlFor='pasword'>Password</label>
                                    <input type='password' className='pass_word input' minLength={8} placeholder='Password' name='password' required/>
                                </div>
                                <DialogActions>
                                    <Button autoFocus
                                        type='submit'
                                        variant='contained'
                                        sx={{
                                            margin: 2,
                                            fontSize: 15,
                                            backgroundColor: '#35b7fe',
                                            color: 'black'
                                        }}
                                    >Login</Button>
                                </DialogActions>
                            </form>
                        </div>
                </DialogContentText>
            </DialogContent>
        </Dialog>
     </>
  )
}

export default Login