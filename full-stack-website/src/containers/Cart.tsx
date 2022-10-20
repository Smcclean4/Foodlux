import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Link, useLocation } from "react-router-dom";
import Cartitems from "../components/Cartitems";
import "../stylesheets/Cart.css";

const Cart = () => { 
  const location: any = useLocation()
  const data = location.state?.data
  const [price, setPrice]: any = useState()
  const [quantity, setQuantity]: any = useState()

  useEffect(() => {
    try {
      let prices = data.map((items: any) => items.price)
      let quantities = data.map((items: any) => items.quantity)
      setPrice(prices)
      setQuantity(quantities)
    } catch(err) {
      console.log(err.mesage)
    }
  }, [data])

  const addItem = (ID: any) => {
    console.log(price[ID], quantity[ID])
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
