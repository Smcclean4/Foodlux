import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import axios from 'axios';
import "../stylesheets/Register.css";

const Register = () => {

  const [userRegisterInfo, setUserRegisterInfo] = useState({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    confirmpassword: ''
  })
  const [registerErr, setRegisterErr] = useState('')
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setUserRegisterInfo({ ...userRegisterInfo, [input.name]: input.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (userRegisterInfo.password === userRegisterInfo.confirmpassword) {
        await axios.post(`http://localhost:${process.env.REACT_APP_PORT}/registerUser.js`, userRegisterInfo).then(res => console.log(res.data)).catch(err => console.log(err))
        navigate('/Login', { replace: true })
      } else {
        setRegisterErr("passwords don't match")
      }
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setRegisterErr(error.response.data.message)
      }
    }
  }

  return (
    <div className="register-background">
      <p className="register-logo">Foodlux</p>
      <Box
        sx={{
          border: "1px solid black",
          borderRadius: "25px 25px",
          backgroundColor: "white",
          boxShadow: "black 0px 0px 20px",
          maxWidth: "250px",
          width: "75%",
          margin: "0 auto",
          padding: "30px",
        }}
      >
        <form
          className="box"
          onSubmit={handleSubmit}
          action="/"
          method="post"
          autoComplete="on">
          <p className="register-header">Register</p>
          <TextField
            className="register-fields"
            label="First Name"
            margin="dense"
            variant="outlined"
            name="firstname"
            value={userRegisterInfo.firstname}
            onChange={handleChange}
            required
          />
          <br></br>
          <br></br>
          <TextField
            className="register-fields"
            label="Last Name"
            margin="dense"
            variant="outlined"
            name="lastname"
            value={userRegisterInfo.lastname}
            onChange={handleChange}
            required
          />
          <br></br>
          <br></br>
          <TextField
            className="register-fields"
            label="Username"
            margin="dense"
            variant="outlined"
            name="username"
            value={userRegisterInfo.username}
            onChange={handleChange}
            required
          />
          <br></br>
          <br></br>
          <TextField
            className="register-fields"
            label="Email"
            type="email"
            margin="dense"
            variant="outlined"
            name="email"
            value={userRegisterInfo.email}
            onChange={handleChange}
            required
          />
          <br></br>
          <br></br>
          <TextField
            className="register-fields"
            label="Password"
            type="password"
            margin="dense"
            variant="filled"
            name="password"
            value={userRegisterInfo.password}
            onChange={handleChange}
            required
          />
          <br></br>
          <br></br>
          <TextField
            className="register-fields"
            label="Confirm Password"
            type="password"
            margin="dense"
            variant="filled"
            name="confirmpassword"
            value={userRegisterInfo.confirmpassword}
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
            Register
          </Button>
          <br></br>
          <br></br>
          {registerErr && <div>{registerErr}</div>}
          <p className="registration-login">
            do you have an account?{" "}
            <Link
              style={{
                color: "red",
              }}
              to="/"
            >
              Log In
            </Link>
          </p>
        </form>
      </Box>
    </div>
  );
};

export default Register;
