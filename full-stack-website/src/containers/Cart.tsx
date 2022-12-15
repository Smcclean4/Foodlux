import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Link, useLocation } from "react-router-dom";
import Cartitems from "../components/Cartitems";
import "../stylesheets/Cart.css";

const Cart = () => {
  const cartFromHomeLocalStorage: any = JSON.parse(localStorage.getItem('cart') || '[]')
  const [cartInfo, setCartInfo]: any = useState(cartFromHomeLocalStorage)
  const [cartTotal, setCartTotal] = useState(0)

  const location: any = useLocation();
  const cartData = location.state?.data

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartInfo))
  }, [cartInfo])

  const addItem = (ID: any) => {
    setCartInfo((info: any[]) => info.map((item: any, i: any) => i === ID ? { ...item, price: (parseFloat(item.price) + parseFloat(cartData[ID].price)).toFixed(2), quantity: item.quantity + 1 } : item))
    console.log('incremented item!!')
    console.log(cartFromHomeLocalStorage[ID].price)
  }

  const removeItem = (ID: any) => {
    if (cartInfo[ID].quantity !== 1) {
      setCartInfo((info: any[]) => info.map((item: any, i: any) => i === ID ? { ...item, price: (parseFloat(item.price) - parseFloat(cartData[ID].price)).toFixed(2), quantity: item.quantity - 1 } : item))
      console.log('decremented item!!')
    }
  }

  return (
    <>
      <div className="cart-background">
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
              marginBottom: "20px"
            }}
          >
            <Link className="return-link" to="/Home">
              Back to home
            </Link>
          </Button>
        </div>
        <p className="cart-header">Cart</p>
        <div className="cart-window">
          {cartInfo?.length !== 0 ? <Cartitems items={cartInfo} additem={addItem} removeitem={removeItem} /> :
            <>
              <h1>YOUR CART IS EMPTY!</h1>
              <br></br>
              <br></br>
              <h1>PLEASE RETURN WHEN YOUVE CHECKED OUT THE STORE AND PURCHASED SOME ITEMS</h1>
              <br></br>
              <br></br>
              <h1>😜</h1>
            </>}
        </div>
        <div className="total-section">
          <h2 className="total">Total: {cartTotal}</h2>
        </div>
        <div className="checkout-section">
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "red",
              "&:hover": {
                backgroundColor: "rgb(162, 6, 6)",
              },
              margin: "20px",
            }}>
            <Link className="checkout-link" to="/Checkout">
              Proceed To Checkout
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Cart;