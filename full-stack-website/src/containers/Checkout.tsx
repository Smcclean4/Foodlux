import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import SendIcon from '@mui/icons-material/Send'
import TextField from "@mui/material/TextField";
import Checkoutitems from "../components/Checkoutitems"
import "../stylesheets/Checkout.css"

const Checkout = () => {
  const cartFromCartLocalStorage: any = JSON.parse(localStorage.getItem('cart') || '[]')
  const [checkoutData, setCheckoutData]: any = useState(cartFromCartLocalStorage)

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("submitting payment info!")
  }

  return (
    <div className="checkout-background">
      <div className="cart-section">
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "red",
            "&:hover": {
              backgroundColor: "rgb(162, 6, 6)",
            },
          }}>
          <Link className="cart-link" to="/Cart">
            Back to cart
          </Link>
        </Button>
      </div>
      <p className="checkout-header">Credit or Debit Card Payment</p>
      <Box
        className="checkout-window"
        sx={{
          border: "1px solid black",
          backgroundColor: "white",
          maxWidth: "80%",
          width: "75%",
          margin: "0 auto",
          padding: "30px",
        }}>
        <form onSubmit={handleSubmit}>
          <div className="checkout-menu">
            <div className="checkout-list">
              <TextField id="outlined-basic" className="checkout-fields" label="Card Number" variant="outlined" />
              <br></br>
              <br></br>
              <TextField id="outlined-basic" className="checkout-fields" label="Expiration Date" variant="outlined" helperText="needs 2 entry boxes" />
              <br></br>
              <br></br>
              <TextField id="outlined-basic" className="checkout-fields" label="CVV" variant="outlined" />
              <br></br>
              <br></br>
              <TextField id="outlined-basic" className="checkout-fields" label="First Name" variant="outlined" />
              <br></br>
              <br></br>
              <TextField id="outlined-basic" className="checkout-fields" label="Last Name" variant="outlined" />
              <br></br>
              <br></br>
              <TextField id="outlined-basic" className="checkout-fields" label="Country" variant="outlined" helperText="needs a list of countries" />
              <br></br>
              <br></br>
              <TextField id="outlined-basic" className="checkout-fields" label="Billing Address" variant="outlined" helperText="needs 2 entry boxes" />
              <br></br>
              <TextField id="outlined-basic" className="checkout-fields" label="City" variant="outlined" helperText="may need list of options?" />
              <br></br>
              <br></br>
              <TextField id="outlined-basic" className="checkout-fields" label="State" variant="outlined" helperText="may need list of options?" />
              <br></br>
              <br></br>
              <TextField id="outlined-basic" className="checkout-fields" label="ZIP" variant="outlined" />
              <br></br>
              <br></br>
              <TextField id="outlined-basic" className="checkout-fields" label="Phone" variant="outlined" />
              <br></br>
              <br></br>
              <TextField id="outlined-basic" className="checkout-fields" label="Email" variant="outlined" />
            </div>
            <div className="checkout-values">
              {checkoutData.length !== 0 ? <Checkoutitems details={checkoutData} /> : <h1>There is not checkout data to show..</h1>}
            </div>
          </div>
          <Button color="error"
            sx={{ "&:hover": { backgroundColor: "red", color: "white" }, marginBottom: "25px" }}
            variant="outlined" endIcon={<SendIcon />} type="submit">
            Pay Now
          </Button>
        </form>
      </Box>
    </div>
  )
}

export default Checkout