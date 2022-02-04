import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './Register.css';

const Register = () => {

    return (
        <div className="register-background">
            <p className="register-logo">Foodlux</p>
            <Box
                component="form"
                sx={{
                    border: "1px solid black",
                    borderRadius: "25px 25px",
                    backgroundColor: "white",
                    boxShadow: "black 0px 0px 20px",
                    maxWidth: "250px",
                    width: "75%",
                    margin: "0 auto",
                    padding:"30px",
                }}
                action="/"
                method="post"
                target="_blank"
                autocomplete="on"
            >
            <p className="register-header">Register</p>
            <TextField className="register-fields" label="Username" margin="dense" variant="outlined" />
                <br></br>
                <br></br>
            <TextField className="register-fields" label="Email" type="email" margin="dense" variant="outlined" />
                <br></br>
                <br></br>
            <TextField required className="register-fields" label="Password" type="password" margin="dense" variant="filled" />
            <br></br>
                <br></br>
            <Button color="error" sx={{'&:hover': {backgroundColor: 'red', color: 'white'}}} variant="outlined" endIcon={<SendIcon />}>Register</Button>
            <br></br>
            <br></br>
            <p className="registration-login">do you have an account? <a>Log In</a></p>
            </Box>
        </div>
    )
}

export default Register