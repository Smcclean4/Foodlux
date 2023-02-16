import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import axios from 'axios';
import { Link } from "react-router-dom";
import "../stylesheets/Login.css";

const Login = () => {

  const [userLoginInfo, setUserLoginInfo] = useState({
    username: '',
    password: ''
  })

  const [loginErr, setLoginErr] = useState('');

  const handleChange = ({ currentTarget: input }) => {
    setUserLoginInfo({ ...userLoginInfo, [input.name]: input.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data: res } = await axios.post(`http://localhost:${process.env.PORT}/userAuth.js`, userLoginInfo)
      console.log(userLoginInfo)
      localStorage.setItem('token', res.data)
      window.location.replace('/')
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setLoginErr(error.reponse.data.message)
      }
    }
  }

  return (
    <div className="login-background">
      <p className="login-logo">Foodlux</p>
      <Box
        sx={{
          border: "1px solid black",
          borderRadius: "25px 25px",
          backgroundColor: "white",
          boxShadow: "black 0px 0px 20px",
          maxWidth: "250px",
          width: "75%",
          margin: "0 auto",
          padding: "10px 30px 30px 30px",
        }}
      >
        <form
          onSubmit={handleSubmit}
          className="box"
          action="/"
          method="post"
          target="_blank"
          autoComplete="on">
          <p className="login-header">Login</p>
          <TextField
            className="login-fields"
            label="Username"
            margin="dense"
            variant="outlined"
            name="username"
            value={userLoginInfo.username}
            onChange={handleChange}
            required
          />
          <br></br>
          <br></br>
          <TextField
            className="login-fields"
            label="Password"
            type="password"
            margin="dense"
            variant="filled"
            name="password"
            value={userLoginInfo.password}
            onChange={handleChange}
            required
          />
          <br></br>
          <br></br>
          <Button
            color="error"
            sx={{ "&:hover": { backgroundColor: "red", color: "white" } }}
            variant="outlined"
            endIcon={<SendIcon />}
            type="submit"
          >
            Log In
          </Button>
          <br></br>
          <br></br>
          {loginErr && <div>{loginErr}</div>}
          <p className="registration-login">
            don't have an account?{" "}
            <Link
              style={{
                color: "red",
              }}
              to="/Register"
            >
              Register
            </Link>
          </p>
        </form>
      </Box>
    </div>
  );
};

export default Login;
