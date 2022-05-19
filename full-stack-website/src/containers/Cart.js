import React from "react";
import { useState } from 'react'
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Cartitems from "../components/Cartitems"
import "../stylesheets/Cart.css";

const Cart = () => {
    const [cart, setCart] = useState([])

  return (
    <div className="cart-background">
      <h1 className="cart-logo">Foodlux</h1>
      <div className="cart-window">
        <Cartitems />
      </div>
      <div className="return-section">
        <Button className="return-button">
          <Link className="return-link" to="/Home">
            Return
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Cart;
