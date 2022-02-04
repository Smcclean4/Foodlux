import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Login'
import Register from './Register'

let loggedin = false;

ReactDOM.render(
  <>
  {!loggedin ? <Register /> : <Login />}
  </> 
  ,
  document.getElementById('root')
);
