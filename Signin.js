import { Button } from '@mui/material';
import React from 'react';
import social from "../images/social.png";


function Signin() {


  return (
    <div style={{position:"absolute",left:"28%",padding:"110px"}}>
        <div style={{border:"1px solid grey",padding:"20px",textAlign:"center",borderRadius:"5px",minHeight:"310px",maxWidth:"350px"}}>
            <img style={{width:"70px"}} src={social} alt='text'/>
        <h2 style={{fontWeight:"200"}}>Create your google  account</h2>
        <h3 style={{fontWeight:"200"}}>Click the signin button</h3>
        <Button  variant='contained'>Signin with google</Button>
        </div>
    </div>
  )
}

export default Signin