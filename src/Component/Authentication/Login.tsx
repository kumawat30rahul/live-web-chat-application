import React from 'react'
import Dialog from '@mui/material/Dialog'
import Button from '@mui/material/Button'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'
import './login.css'

function Login() {
  const [open,setOpen] = React.useState(false)
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
                width: '500px'
              }}
            >
                <DialogContentText 
                  id="dialog-description"
                >
                  <div className='inputs'>
                            <form>
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