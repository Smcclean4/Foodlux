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
  let cartData: any[] = [];
  const {dataStorage, priceStorage, quantityStorage} = JSON.parse(localStorage.getItem('checkout') || "[]")

  useEffect(() => {
    const setData = async () => {
      let prices = data?.map((items: { price: any; }) => items.price)
      let quantities = data?.map((items: { quantity: any; }) => items.quantity)
      await setPrice(prices)
      await setQuantity(quantities)
    }
    setData();
  }, [data])

  useEffect(() => {
    const storeData = (items:any) => {
    cartData.push(items);
    localStorage.setItem('checkout', JSON.stringify(cartData))
  }
  storeData([data, price, quantity]);
  console.log(dataStorage, priceStorage, quantityStorage)
  }, [quantity, price])

  const addItem = (ID: any) => {
    let temp_qty: any = [...quantity]
    let temp_inc: any = [temp_qty[ID]]
    temp_inc = Number(temp_inc) + 1;
    temp_qty[ID] = temp_inc
    setQuantity(temp_qty)
    let temp_prc: any = [...price]
    let temp_prcx: any = [temp_prc[ID]]
    let temp_prco = data[ID].price
    temp_prcx = Number(temp_prcx) + Number(temp_prco)
    temp_prc[ID] = temp_prcx
    setPrice(temp_prc)
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
          {data?.length !== 0 ? <Cartitems items={data} additem={addItem} removeitem={removeItem} price={priceStorage} quantity={quantityStorage} /> : 
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
              Return to home
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Cart;
