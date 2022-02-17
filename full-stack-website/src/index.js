import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import './index.css';
import Register from './routes/Register';
import Login from './routes/Login';

ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Register />} />
    <Route path="Login" element={<Login />} />
    <Route path="Register" element={<Register />} />
  </Routes>
  </BrowserRouter> 
  ,
  document.getElementById('root')
);
