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
      <h1 className="cart-header">Cart</h1>
        <Cartitems
        // place cart state from above into cart items
        // cart picture, cart price, cart name, cart description
        // create shared buton throughout app?
        />
      </div>
      <div className="return-section">
        <Button variant="contained" size="large" sx={{
          backgroundColor:"red",
          '&:hover': {
            backgroundColor: "rgb(162, 6, 6)",
          },
          marginTop:"20px"
        }}>
          <Link className="return-link" to="/Home">
            Return
          </Link> 
        </Button>
      </div>
    </div>
  );
};

export default Cart;
