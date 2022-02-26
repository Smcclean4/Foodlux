import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import './stylesheets/index.css';
import Register from './routes/Register';
import Login from './routes/Login';
import Home from './routes/Home';

ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Register />} />
    <Route path="Login" element={<Login />} />
    <Route path="Register" element={<Register />} />
    <Route path="Home" element={<Home />} />
  </Routes>
  </BrowserRouter> 
  ,
  document.getElementById('root')
);
