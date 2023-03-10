import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./stylesheets/index.css";
import Register from "./containers/Register";
import Login from "./containers/Login";
import Home from "./containers/Home";
import Cart from "./containers/Cart";
import Checkout from "./containers/Checkout";
import React from "react";

const user = localStorage.getItem("token");

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="Login" element={<Login />} />
      <Route path="Register" element={<Register />} />
      {user && <Route path="Home" element={<Home />} />}
      {user && <Route path="Cart" element={<Cart />} />}
      {user && <Route path="Checkout" element={<Checkout />} />}
      <Route path="/" element={<Navigate replace to="Login" />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>Nothing to see here ....</p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root"),
);
