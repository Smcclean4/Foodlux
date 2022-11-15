import React from 'react'
import { Link } from 'react-router-dom';
import FormLabel from '@mui/joy/FormLabel';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send'
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import "../stylesheets/Checkout.css"

const Checkout = () => {

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
          marginTop: "20px",
        }}>
        <Link className="cart-link" to="/Cart">
          Back to cart
        </Link>
      </Button>
      </div>
      <div className="checkout-window">
        <p className="checkout-header">Credit or Debit Cart Payment</p>
        <form onSubmit={handleSubmit}>
            <div className="checkout-list">
            <ul>
              <li>
              <FormLabel sx={{fontSize:"1.3em"}}>Card Number</FormLabel>
              <Input type="text" />
              </li>
              <li>
              <FormLabel sx={{fontSize:"1.3em"}}>Expiration Date</FormLabel>
              <Input type="text" />
              <Input type="text" />
              </li>
              <li>
              <FormLabel sx={{fontSize:"1.3em"}}>CVV</FormLabel>
              <Input type="text" />
              </li>
              <li>
              <FormLabel sx={{fontSize:"1.3em"}}>First Name</FormLabel>
              <Input type="text" />
              </li>
              <li>
              <FormLabel sx={{fontSize:"1.3em"}}>Last Name</FormLabel>
              <Input type="text" />
              </li>
              <li>
              <FormLabel sx={{fontSize:"1.3em"}}>Country</FormLabel>
              <Input type="text" />
              <datalist id="countries">
                <option value="list all countries" />
              </datalist>
              </li>
              <li>
              <FormLabel sx={{fontSize:"1.3em"}}>Billing Address</FormLabel>
              <Input type="text" />
              <Input type="text" />
              </li>
              <li>
              <FormLabel sx={{fontSize:"1.3em"}}>City</FormLabel>
              <Input type="text" />
              </li>
              <li>
              <FormLabel sx={{fontSize:"1.3em"}}>State</FormLabel>
              <Input type="text" />
              <datalist id="states">
                <option value="list all states within the country" />
              </datalist>
              </li>
              <li>
              <FormLabel sx={{fontSize:"1.3em"}}>ZIP</FormLabel>
              <Input type="text" />
              </li>
              <li>
              <FormLabel sx={{fontSize:"1.3em"}}>Phone Number</FormLabel>
              <Input type="text" />
              </li>
              <li>
              <FormLabel sx={{fontSize:"1.3em"}}>Email Address</FormLabel>
              <Input type="text" />
              </li>
            </ul>
            <div className="checkout-amount">             
                <h1>display amount</h1>
                <h3>display prices</h3>
            </div>
            </div>
          <Button color="error"
          sx={{ "&:hover": { backgroundColor: "red", color: "white" }, marginBottom:"25px" }}
          variant="outlined" endIcon={<SendIcon />} type="submit">
            Pay Now
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Checkout