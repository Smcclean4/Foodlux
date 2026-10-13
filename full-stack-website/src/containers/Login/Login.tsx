import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import SendIcon from "@mui/icons-material/Send";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from 'axios';
import { AxiosError } from "axios";
import { Link } from "react-router-dom";

export interface LoginInterface {
  username: string;
  password: string;
}

const Login = () => {
  const [userLoginInfo, setUserLoginInfo] = useState<LoginInterface>({
    username: '',
    password: ''
  })
  const [loginErr, setLoginErr] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = ({ currentTarget: input }: { currentTarget: { name: string; value: string; }; }) => {
    setUserLoginInfo({ ...userLoginInfo, [input.name]: input.value })
  }

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    try {
      const { data: res } = await axios.post(`https://${process.env.REACT_APP_PORT}/userAuth`, userLoginInfo)
      console.log(userLoginInfo)
      localStorage.setItem('token', res.data)
      window.location.replace('/Home')
    } catch (error) {
      if (error instanceof AxiosError && error.response && error.response.status >= 400 && error.response.status <= 500) {
        setLoginErr(error.response.data.message)
      }
    }
  }

  return (
    <div className="page-background login-background" data-testid="Login">
      <p className="brand-logo login-logo">Foodlux</p>
      <Paper
        elevation={6}
        sx={{
          maxWidth: 400,
          width: "90%",
          mx: "auto",
          p: { xs: 3, sm: 4 },
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          action="/"
          method="post"
          target="_blank"
          autoComplete="on"
        >
          <Typography variant="h3" className="login-header" sx={{ mb: 2 }}>Login</Typography>
          <Stack spacing={2}>
            <TextField
              className="login-fields"
              label="Username"
              name="username"
              value={userLoginInfo.username}
              onChange={handleChange}
              required
            />
            <TextField
              className="login-fields"
              label="Password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={userLoginInfo.password}
              onChange={handleChange}
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton aria-label="toggle password visibility" onClick={() => setShowPassword((show) => !show)} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              color="primary"
              variant="contained"
              endIcon={<SendIcon />}
              type="submit"
            >
              Log In
            </Button>
            {loginErr && <Alert severity="error" className="error">{loginErr}</Alert>}
            <Typography className="registration-login">
              don't have an account?{" "}
              <Link style={{ color: "#E53935" }} to="/Register">
                Register
              </Link>
            </Typography>
          </Stack>
        </Box>
      </Paper>
    </div>
  );
};

export default Login;
