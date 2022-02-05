import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Login';
import Register from './Register';

let isloggedin = true;

ReactDOM.render(
  <>
  {!isloggedin ? <Login /> : <Register/>}
  </> 
  ,
  document.getElementById('root')
);
