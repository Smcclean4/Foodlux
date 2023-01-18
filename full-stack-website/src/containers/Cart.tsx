import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Link, useLocation } from "react-router-dom";
import Cartitems from "../components/Cartitems";
import { LoadingCircle } from "../tools/LoadingCircle";
import { CartInfoInterface } from "./Home";
import "../stylesheets/Cart.css";

const Cart = () => {

  const cartFromHomeLocalStorage: CartInfoInterface[] = JSON.parse(localStorage.getItem('cart') || '[]')

  const [cartInfo, setCartInfo] = useState<CartInfoInterface[]>(cartFromHomeLocalStorage)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      await new Promise((p) => setTimeout(p, 1000));
      setLoading((loading) => !loading)
    }
    loadData();
  }, [])

  const location: any = useLocation()
  const homeData = location.state?.data

  const home: any[] = []
  const homeItems = homeData?.map((menu: any[]) => menu.map((food: { menu: any[]; }) => food.menu.map((items) => {
    home.push(items)
  })))

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartInfo))
    console.log(homeItems)
  }, [cartInfo])

  const cartTotal = () => {
    return cartInfo.map((item) => item.price).reduce((acc, val) => (Number(acc) + Number(val)).toFixed(2), 0)
  }

  const addItem = (ID: number) => {
    setCartInfo((info) => info?.map((item, i) => i === ID ? { ...item, price: (Number(item.price) + Number(home[ID]?.price)).toFixed(2), quantity: item.quantity + 1 } : item));
  }

  const removeItem = (ID: number) => {
    if (cartInfo[ID].quantity !== 1) {
      setCartInfo((info) => info?.map((item, i) => i === ID ? { ...item, price: (Number(item.price) - Number(home[ID]?.price)).toFixed(2), quantity: item.quantity - 1 } : item));
    }
  }

  return (
    !loading ? (
      <div className="cart-background">
        <div className="checkout-return-section">
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
              <Link className="checkout-link" to="/Checkout" state={{ data: cartInfo }}>
                Proceed To Checkout
              </Link>
            </Button>
          </div>
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
              <h1>🍔</h1>
            </>}
        </div>
        <div className="total-section">
          <h2 className="total">Total: {cartTotal()}</h2>
        </div>
      </div>
    ) : (
      <LoadingCircle />
    )
  );
};

export default Cart;