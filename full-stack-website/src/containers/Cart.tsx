import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Link, useLocation } from "react-router-dom";
import Cartitems from "../components/Cartitems";
import "../stylesheets/Cart.css";

const Cart = () => { 
  const location: any = useLocation()
  const data = location.state?.data
  let [price, setPrice]: any = useState([])
  let [quantity, setQuantity]: any = useState([])

  useEffect(() => {
    const setData = async () => {
      let prices = data?.map((items: { price: any; }) => items.price)
      let quantities = data?.map((items: { quantity: any; }) => items.quantity)
      await setPrice(prices)
      await setQuantity(quantities)
    }
    setData();
  }, [data])

  const addItem = (ID: any) => {
    let temp_qty: any = [...quantity]
    let temp_inc: any = [temp_qty[ID]]
    temp_inc = Number(temp_inc) + 1;
    temp_qty[ID] = temp_inc
    setQuantity(temp_qty)
    let temp_prc: any = [...price]
    let temp_prcx: any = [temp_prc[ID]]
    let temp_prco = data[ID].price
    console.log(temp_prco)
    temp_prcx = Number(temp_prcx) + Number(temp_prco)
    temp_prc[ID] = temp_prcx
    setPrice(temp_prc)
    console.log(price[ID], quantity[ID])
  }

  const removeItem = (ID: any) => {
    if (quantity[ID] === 1 && price[ID] === price[ID]) return;
    let temp_qty: any = [...quantity]
    let temp_inc: any = [temp_qty[ID]]
    temp_inc = Number(temp_inc) - 1;
    temp_qty[ID] = temp_inc
    setQuantity(temp_qty)
    let temp_prc: any = [...price]
    let temp_prcx: any = [temp_prc[ID]]
    let temp_prco = data[ID].price
    console.log(temp_prco)
    temp_prcx = Number(temp_prcx) - Number(temp_prco)
    temp_prc[ID] = temp_prcx
    setPrice(temp_prc)
    console.log(price[ID], quantity[ID])
  }

  return (
    <>
      <div className="cart-background">
        <h1 className="cart-logo">Foodlux</h1>
        <div className="checkout-section">
          <Button 
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "red",
              "&:hover": {
                backgroundColor: "rgb(162, 6, 6)",
                },
                marginTop: "20px",
              }}>
            <Link className="checkout-link" to="/Checkout">
            Proceed To Checkout
            </Link>
          </Button>
        </div>
        <h1 className="cart-header">Cart</h1>
        <div className="cart-window">
          {data.length !== 0 ? <Cartitems items={data} additem={addItem} removeitem={removeItem} price={price} quantity={quantity} /> : 
          <>
            <h1>YOUR CART IS EMPTY!</h1>
            <br></br>
            <br></br>
            <h1>PLEASE RETURN WHEN YOUVE CHECKED OUT THE STORE AND PURCHASED SOME ITEMS</h1>
            <br></br>
            <br></br>
            <h1>😜</h1>
          </> }
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
