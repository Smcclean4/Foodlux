import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "../stylesheets/Cart.css";

const Cart = () => {
  return (
    <div className="cart-background">
      <h1 className="cart-logo">Foodlux</h1>
        
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
