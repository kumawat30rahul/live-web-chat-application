import * as React from 'react'
import Dialog from '@mui/material/Dialog';
function Signup() {
    const [open,setOpen] = React.useState(false)
  return (
    <div>
        <Dialog open={open}></Dialog>
     </div>
  )
}

export default Signup