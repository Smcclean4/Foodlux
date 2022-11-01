import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./stylesheets/index.css";
import Register from "./containers/Register";
import Login from "./containers/Login";
import Home from "./containers/Home";
import Cart from "./containers/Cart";
import Checkout from "./containers/Checkout";
import React from "react";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="Login" element={<Login />} />
      <Route path="Register" element={<Register />} />
      <Route path="Home" element={<Home />} />
      <Route path="Cart" element={<Cart />} />
      <Route path="Checkout" element={<Checkout />} />
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
