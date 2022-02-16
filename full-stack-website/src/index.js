import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Login';
import Register from './Register';

const isloggedin = false;

ReactDOM.render(
  <>
  {!isloggedin ? <Register /> : <Login />}
  </> 
  ,
  document.getElementById('root')
);
