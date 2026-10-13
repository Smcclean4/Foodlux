import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import SendIcon from "@mui/icons-material/Send";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
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
  const [userRegisterInfo, setUserRegisterInfo] = useState<RegisterInterface>({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    confirmpassword: ''
  })
  const [registerErr, setRegisterErr] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setUserRegisterInfo({ ...userRegisterInfo, [input.name]: input.value })
  }

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

  const passwordAdornment = (
    <InputAdornment position="end">
      <IconButton aria-label="toggle password visibility" onClick={() => setShowPassword((show) => !show)} edge="end">
        {showPassword ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </InputAdornment>
  );

  return (
    <div className="page-background register-background">
      <p className="brand-logo register-logo">Foodlux</p>
      <Paper
        elevation={6}
        sx={{
          maxWidth: 520,
          width: "90%",
          mx: "auto",
          p: { xs: 3, sm: 4 },
          mb: 4,
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          action="/"
          method="post"
          data-testid="Register"
          autoComplete="on"
        >
          <Typography variant="h3" className="register-header" sx={{ mb: 2 }}>Register</Typography>
          <Stack spacing={2}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  aria-label="First Name"
                  label="First Name"
                  inputProps={{ "data-testid": "firstname-input" }}
                  name="firstname"
                  value={userRegisterInfo.firstname}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  aria-label="Last Name"
                  label="Last Name"
                  inputProps={{ "data-testid": "lastname-input" }}
                  name="lastname"
                  value={userRegisterInfo.lastname}
                  onChange={handleChange}
                  required
                />
              </Grid>
            </Grid>
            <TextField
              aria-label="Username"
              label="Username"
              inputProps={{ "data-testid": "username-input" }}
              name="username"
              value={userRegisterInfo.username}
              onChange={handleChange}
              required
            />
            <TextField
              aria-label="Email"
              label="Email"
              inputProps={{ "data-testid": "email-input" }}
              type="email"
              name="email"
              value={userRegisterInfo.email}
              onChange={handleChange}
              required
            />
            <TextField
              aria-label="Password"
              label="Password"
              inputProps={{ "data-testid": "password-input" }}
              type={showPassword ? "text" : "password"}
              name="password"
              value={userRegisterInfo.password}
              onChange={handleChange}
              required
              InputProps={{ endAdornment: passwordAdornment }}
            />
            <TextField
              aria-label="Confirm Password"
              label="Confirm Password"
              inputProps={{ "data-testid": "confirmpassword-input" }}
              type={showPassword ? "text" : "password"}
              name="confirmpassword"
              value={userRegisterInfo.confirmpassword}
              onChange={handleChange}
              required
              InputProps={{ endAdornment: passwordAdornment }}
            />
            <Button
              role="button"
              color="primary"
              variant="contained"
              endIcon={<SendIcon />}
              type="submit"
              name="submit"
            >
              Register
            </Button>
            {registerErr && <Alert severity="error" className="error">{registerErr}</Alert>}
            <Typography className="registration-login">
              do you have an account?{" "}
              <Link style={{ color: "#E53935" }} to="/">
                Log In
              </Link>
            </Typography>
          </Stack>
        </Box>
      </Paper>
    </div>
  );
};

export default Register;
