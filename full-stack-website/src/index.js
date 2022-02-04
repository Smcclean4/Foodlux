import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Login'
import Register from './Register'
import CheckRegister from './CheckRegister'

ReactDOM.render(
  <>
  {/* {CheckRegister(false) ? <Register /> : <Login />} */<Register />}
  </> 
  ,
  document.getElementById('root')
);
