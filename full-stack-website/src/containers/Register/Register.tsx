import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import axios from 'axios';
import "../../stylesheets/Register.css";

export interface RegisterInterface {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  confirmpassword: string;
}

const Register = () => {
  // stores user register info into state
  const [userRegisterInfo, setUserRegisterInfo] = useState<RegisterInterface>({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    confirmpassword: ''
  })
  // handles error for try catch
  const [registerErr, setRegisterErr] = useState('')
  const navigate = useNavigate();
  // handles input information for register info
  const handleChange = ({ currentTarget: input }) => {
    setUserRegisterInfo({ ...userRegisterInfo, [input.name]: input.value })
  }
  // submits user register info
  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    try {
      if (userRegisterInfo.password === userRegisterInfo.confirmpassword) {
        await axios.post(`https://${process.env.REACT_APP_PORT}/registerUser`, userRegisterInfo).then(res => console.log(res.data)).catch(err => console.log(err))
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
          maxWidth: "415px",
          width: "50%",
          margin: "0 auto",
          padding: "30px",
        }}
      >
        <form
          onSubmit={handleSubmit}
          action="/"
          method="post"
          data-testid="Register"
          autoComplete="on">
          <p className="register-header">Register</p>
          <TextField
            sx={{ margin: "5px" }}
            aria-label="First Name"
            label="First Name"
            inputProps={{ "data-testid": "firstname-input" }}
            margin="dense"
            variant="outlined"
            name="firstname"
            value={userRegisterInfo.firstname}
            onChange={handleChange}
            required
          />
          <TextField
            sx={{ margin: "5px" }}
            aria-label="Last Name"
            label="Last Name"
            inputProps={{ "data-testid": "lastname-input" }}
            margin="dense"
            variant="outlined"
            name="lastname"
            value={userRegisterInfo.lastname}
            onChange={handleChange}
            required
          />
          <TextField
            sx={{ margin: "5px" }}
            aria-label="Username"
            label="Username"
            inputProps={{ "data-testid": "username-input" }}
            margin="dense"
            variant="outlined"
            name="username"
            value={userRegisterInfo.username}
            onChange={handleChange}
            required
          />
          <TextField
            sx={{ margin: "5px" }}
            aria-label="Email"
            label="Email"
            inputProps={{ "data-testid": "email-input" }}
            type="email"
            margin="dense"
            variant="outlined"
            name="email"
            value={userRegisterInfo.email}
            onChange={handleChange}
            required
          />
          <TextField
            sx={{ margin: "5px" }}
            aria-label="Password"
            label="Password"
            inputProps={{ "data-testid": "password-input" }}
            type="password"
            margin="dense"
            variant="filled"
            name="password"
            value={userRegisterInfo.password}
            onChange={handleChange}
            required
          />
          <TextField
            sx={{ margin: "5px" }}
            aria-label="Confirm Password"
            label="Confirm Password"
            inputProps={{ "data-testid": "confirmpassword-input" }}
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
            role="button"
            color="error"
            sx={{ "&:hover": { backgroundColor: "red", color: "white", cursor: "pointer" } }}
            variant="outlined"
            endIcon={<SendIcon />}
            type="submit"
            name="submit"
          >
            Register
          </Button>
          <br></br>
          <br></br>
          {registerErr && <h3 className="error">{registerErr}</h3>}
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
