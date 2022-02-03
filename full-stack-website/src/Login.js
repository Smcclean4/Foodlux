import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Login.css';

const Login = () => {

    return (
        <div className="login-background">
            <p className="login-logo">Foodlux</p>
            <Box
                component="form"
                sx={{
                    border: "1px solid black",
                    borderRadius: "25px 25px",
                    backgroundColor: "white",
                    boxShadow: "black 4px 2px 10px",
                    width: "25%",
                    margin: "0 auto",
                    height: "50%",
                }}
                action="/"
                method="post"
                target="_blank"
                autocomplete="on"
            >
            <TextField className="login-fields" label="Username" margin="dense" variant="outlined" />
                <br></br>
                <br></br>
            <TextField className="login-fields" label="Email" type="email" margin="dense" variant="outlined" />
                <br></br>
                <br></br>
            <TextField required className="login-fields" label="Password" type="password" margin="dense" variant="filled" />
            <br></br>
                <br></br>
            <Button variant="contained">Log In</Button>
            </Box>
        </div>
    )
}

export default Login