import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Login';
import Register from './Register';

const Home = () => {
  const [state, setState] = useState(false)
  const changeState = () => {
    if (state == false) {
      return true
    } else {
      return false
    }
  }

  if (state == true) {
    return <Login change={changeState} />
  } else if (state == false) {
    return <Register change={changeState}/>
  }

}

ReactDOM.render(
  <>
  <Home />
  </> 
  ,
  document.getElementById('root')
);
