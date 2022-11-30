import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Link, useLocation } from "react-router-dom";
import Cartitems from "../components/Cartitems";
import "../stylesheets/Cart.css";

let pricesStorage = JSON.parse(localStorage.getItem('prices') || '[]')
let quantitiesStorage = JSON.parse(localStorage.getItem('quantities') || '[]')

const Cart = () => {
  const location: any = useLocation()
  const cartData = location.state?.data
  const prices = cartData?.map((items: { price: any; }) => items.price)
  const dataId = cartData?.map((items: any, idx: any) => idx)
  const quantities = cartData?.map((items: { quantity: any; }) => items.quantity)
  // defualts to second condiditon because prices/quantity storage isnt technically empty so value becomes blank and defaults to empty prices storage at that location.
  const [price, setPrice]: any = useState(typeof pricesStorage !== 'undefined' && pricesStorage.length === 0 ? prices : pricesStorage)
  const [quantity, setQuantity]: any = useState(typeof quantitiesStorage !== 'undefined' && quantitiesStorage.length === 0 ? quantities : quantitiesStorage)

  useEffect(() => {
    localStorage.setItem('prices', JSON.stringify(price))
    localStorage.setItem('quantities', JSON.stringify(quantity))
    console.log(dataId)
  }, [price, quantity])

  const addItem = (ID: any) => {
    let temp_qty: any = [...quantity]
    let temp_inc: any = [temp_qty[ID]]
    temp_inc = Number(temp_inc) + 1;
    temp_qty[ID] = temp_inc
    setQuantity(temp_qty)
    let temp_prc: any = [...price]
    let temp_prcx: any = [temp_prc[ID]]
    let temp_prco = cartData[ID].price
    temp_prcx = Number(temp_prcx) + Number(temp_prco)
    temp_prc[ID] = temp_prcx
    setPrice(temp_prc)
  }

  const removeItem = (ID: any) => {
    if (quantity[ID] === 1) return;
    let temp_qty: any = [...quantity]
    let temp_inc: any = [temp_qty[ID]]
    temp_inc = Number(temp_inc) - 1;
    temp_qty[ID] = temp_inc
    setQuantity(temp_qty)
    let temp_prc: any = [...price]
    let temp_prcx: any = [temp_prc[ID]]
    let temp_prco = cartData[ID].price
    temp_prcx = Number(temp_prcx) - Number(temp_prco)
    temp_prc[ID] = temp_prcx
    setPrice(temp_prc)
  }

  return (
    <>
      <div className="cart-background">
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
        <p className="cart-header">Cart</p>
        <div className="cart-window">
          {cartData?.length !== 0 ? <Cartitems items={cartData} additem={addItem} removeitem={removeItem} price={price} quantity={quantity} /> :
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
              Return to home
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Cart;
