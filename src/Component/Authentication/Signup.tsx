import React from 'react'
import Dialog from '@mui/material/Dialog'
import Button from '@mui/material/Button'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth,storage,db } from '../Firbase/firbase'
import './signup.css'
import { Typography } from '@mui/material'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { doc, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'




function Signup() {
    const [open, setOpen] = React.useState(false)
    const [error, setError] = React.useState(false)
    const [loading, setLoading] = React.useState(false)

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const fullName = e.target[0].value
        const email = e.target[1].value
        const password = e.target[2].value
        const imageFile = e.target[3].file

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)

            const date = new Date().getTime();
            const storageRef = ref(storage, `${fullName + date}`);
            
            await uploadBytesResumable(storageRef, imageFile).then(() => {
                getDownloadURL(storageRef).then(async (downloadURL) => {
                    try {
                        //Update profile
                        await updateProfile(res.user, {
                            displayName: fullName,
                            photoURL: downloadURL,
                        })
                        await setDoc(doc(db, "users", res.user.uid), {
                            uid: res.user.uid,
                            displayName: fullName,
                            emailId: email,
                            photoURL: downloadURL,
                          });
                        //   const navigate = useNavigate()
                          await setDoc(doc(db, "userChats", res.user.uid), {});
                        //     navigate("/");
                    }catch(err){
                        console.log(err);
                        setError(true);
                        setLoading(false);
                    }
                })
            })


            toast.success('Success', {
                position: "top-center",
                delay: 1,
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            
        } catch {
            setError(true);
        }
        finally{
            setOpen(false)
        }
    }
    return (
        <>
            <Button
                onClick={() => setOpen(true)}
                variant="contained"
                sx={{
                    margin: 2,
                    fontSize: 24,
                    backgroundColor: '#35b7fe',
                    color: 'black'
                }}
                className="btn"
            >Signup</Button>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby='dialog-title'
                aria-describedby='dialog-description'
                className='dialog'
            >
                <DialogTitle sx={{color: '#35b7fe',fontWeight: '900',lineHeight: '25px' }} id="dialog-title" className='dialog-title'>
                    Join the Conversation
                </DialogTitle>
                <Typography 
                    className='subtagline'
                >
                    Discover new friendships and endless conversations.
                </Typography>
                <DialogContent
                
                    className='dialog_content'
                >
                    <DialogContentText id="dialog-description">
                        <div className='inputs'>
                            <form onSubmit={handleSubmit}>
                                <div className='input_div'>
                                    <label htmlFor='fullName'>Full Name</label>
                                    <input type='text' className='full_name input' placeholder='Full Name' name='fullName' required/>
                                    <label htmlFor='emailId'>Email Id</label>
                                    <input type='email' className='email_id input' placeholder='Email Id' name='emailId' required/>
                                    <label htmlFor='pasword'>Password</label>
                                    <input type='password' className='pass_word input' minLength={8} placeholder='Password' name='password' required/>
                                    <label htmlFor='image'>Add Image</label>
                                    <input type='file' className='image input' placeholder='Add your Image' name='image'/>
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
                                    >Register</Button>
                                </DialogActions>
                            </form>
                        </div>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
            <ToastContainer/>
        </>
    )
}

export default Signup


{/* <label htmlFor='fullName'>Full Name</label>
<input type="text" className='fullname' placeholder='Full Name' name="fullName"/>
<label htmlFor='emailId'>Email Id</label>
<input type="email" className='email' placeholder='Email Id' name="emailId"/>
<label htmlFor='fullName'>Password</label>
<input type="password" className='fullname' placeholder='Password' name="password"/> */}

