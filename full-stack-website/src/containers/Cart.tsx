import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Link, useLocation } from "react-router-dom";
import Cartitems from "../components/Cartitems";
import "../stylesheets/Cart.css";

const Cart = () => { 
  const location: any = useLocation()
  const data = location.state?.data
  const [price, setPrice]: any = useState([])
  const [quantity, setQuantity]: any = useState([])

  useEffect(() => {
    // just logging first instance.. find out a way to log all instances...
    for (let i = 0; i < data.length; i++) {
      setPrice(data[i].price)
      setQuantity(data[i].quantity)
      console.log(data[i].price, data[i].quantity)
    }
  }, [data])

  const addItem = (ID: any) => {
    console.log(price, quantity)
  }

  return (
    <>
      <div className="cart-background">
        <h1 className="cart-logo">Foodlux</h1>
        <div className="cart-window">
          <h1 className="cart-header">Cart</h1>
          <Cartitems items={data} additem={addItem} price={price} quantity={quantity} />
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
