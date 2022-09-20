import React from "react";
import Button from "@mui/material/Button";
import { Link, useLocation } from "react-router-dom";
import Cartitems from "../components/Cartitems";
import "../stylesheets/Cart.css";

const Cart = () => {
  const location = useLocation();
  // getting state from link
  const data = location.state?.data;
  // clear storage on clearcart click
  const clearCart = () => {
    // figure out how to clear storage?? make sure that it refreshes and removes data!!
    localStorage.clear();
  };

  console.log(data);

  return (
    <>
      <div className="cart-background">
        <h1 className="cart-logo">Foodlux</h1>
        <div className="cart-window">
          <h1 className="cart-header">Cart</h1>
          <Cartitems items={data} />
          <Button
            onClick={() => clearCart()}
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "red",
              "&:hover": {
                backgroundColor: "rgb(162, 6, 6)",
              },
              marginTop: "20px",
            }}
          >
            Clear Cart
          </Button>
        </div>
        <div className="return-section">
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "red",
              "&:hover": {
                backgroundColor: "rgb(162, 6, 6)",
              },
              marginTop: "20px",
            }}
          >
            <Link className="return-link" to="/Home">
              Return
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Cart;
