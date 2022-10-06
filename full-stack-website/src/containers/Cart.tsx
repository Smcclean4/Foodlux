import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Link, useLocation } from "react-router-dom";
import Cartitems from "../components/Cartitems";
import "../stylesheets/Cart.css";

const Cart = () => { 
  const location: any = useLocation()
  const data = location.state?.data
  const [quantity, setQuantity] = useState(1)

  // figure out why quantity cannot be referenced by ID
  const addItem = (id: string | number) => {
    setQuantity(quantity[id] + 1)
    console.log(quantity[id])
  }

  // figure out above problem for subtracting as well
  const removeItem = (id: string | number) => {
    if (quantity > 1) {
      setQuantity(quantity[id] - 1)
    }
    console.log(quantity[id])
  }

  return (
    <>
      <div className="cart-background">
        <h1 className="cart-logo">Foodlux</h1>
        <div className="cart-window">
          <h1 className="cart-header">Cart</h1>
          <Cartitems items={data} amount={quantity} additem={addItem} removeitem={removeItem} />
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
