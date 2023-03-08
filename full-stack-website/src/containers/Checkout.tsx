import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import SendIcon from '@mui/icons-material/Send'
import TextField from "@mui/material/TextField";
import MenuItem from '@mui/material/MenuItem';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Checkoutitems from "../components/Checkoutitems"
import "../stylesheets/Checkout.css"
import { LoadingCircle } from '../tools/LoadingCircle';
import { Foodluxbus } from '../tools/Foodluxbus';
import axios from 'axios';

const Checkout = () => {
  interface UserEmailInfoInterface {
    firstname: string;
    country: string;
    city: string;
    state: string;
    zip: string;
    email: string;
  }
  // using location to get state data from cart and using navigation for directing back to home after submittion
  const location: any = useLocation();
  const cartData = location.state?.cart
  // stores the amount of seconds that the foodlux bus page will be displayed
  const [seconds, setSeconds] = useState(15);
  // displays the submitting page which has the foodlux bus component
  const [submitting, setSubmitting] = useState(false)
  // shows the loading animation when loading onto the page
  const [loading, setLoading] = useState(true)
  // logs error
  const [checkoutErr, setCheckoutErr] = useState('')
  // put user email info into state
  const [userEmailInfo, setUserEmailInfo] = useState<UserEmailInfoInterface>({
    firstname: "",
    country: "",
    city: "",
    state: "",
    zip: "",
    email: ""
  })

  // handles change of user inputs for user email info
  const handleChange = ({ target: input }) => {
    setUserEmailInfo({ ...userEmailInfo, [input.name]: input.value })
  }

  // handles submittion of user data and handles removing cart and navigation to home after timer has finished
  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    try {
      if (cartData?.length > 0) {
        setSubmitting(true)
        await axios.post(`http://localhost:${process.env.REACT_APP_PORT}/sendEmail`, userEmailInfo).then(res => console.log(res.data)).catch(err => console.log(err))
      } else {
        setCheckoutErr("Checkout once you've added something to your Cart!")
      }
    } catch (error) {
      setCheckoutErr(error.message)
    }
  }
  // gets checkout total of items in cart
  const checkoutTotal = () => {
    return cartData.map((item: { price: any; }) => item.price).reduce((acc: string, val: string) => (parseFloat(acc) + parseFloat(val)).toFixed(2), 0)
  }
  // loading animation
  useEffect(() => {
    const loadData = async () => {
      await new Promise((p) => setTimeout(p, 1000));
      setLoading((loading) => !loading)
    }
    loadData();
  }, [])

  // countries for payment
  const countries = [
    {
      country: "USA"
    }
  ]
  // cities for payment
  const city = [
    {
      city: "Compton"
    },
    {
      city: "Los Angeles"
    }, {
      city: "Santa Monica"
    }
  ]
  // states for payment
  const state = [
    {
      state: "California"
    },
    {
      state: "New York"
    }, {
      state: "Texas"
    }
  ]
  // zip for payment
  const zip = [
    {
      zip: "90210"
    },
    {
      zip: "90220"
    },
    {
      zip: "90260"
    }
  ]
  // styling for each input section.. manipulating Material UI
  const checkoutMuiStyling = {
    '.MuiOutlinedInput-notchedOutline:hover': {
      borderColor: 'white'
    },
    '.MuiOutlinedInput-notchedOutline': {
      borderColor: 'white'
    },
    '.MuiFormLabel-root': {
      color: 'white'
    },
    '.MuiInputBase-input': {
      color: 'white'
    },
    "& label.Mui-focused": {
      color: "white"
    },
    // focused color for input with variant='standard'
    "& .MuiInput-underline:after": {
      borderBottomColor: "white"
    },
    // focused color for input with variant='filled'
    "& .MuiFilledInput-underline:after": {
      borderBottomColor: "white"
    },
    // focused color for input with variant='outlined'
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "white"
      }
    }
  }

  return (
    // if payment is being submitted run foodlux bus operation
    submitting ? <Foodluxbus timer={seconds} settimer={setSeconds} /> :
      (
        !loading ? (
          <div className="checkout-background">
            <div className="cart-section">
              <Link className="cart-link" to="/Cart">
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: "red",
                    "&:hover": {
                      backgroundColor: "rgb(162, 6, 6)",
                    },
                  }}
                  startIcon={<ArrowBackIosIcon />}>
                  Cart
                </Button>
              </Link>
            </div>
            <p className="checkout-header">Credit/Debit Card Payment</p>
            <Box
              className="checkout-window"
              sx={{
                backdropFilter: "blur(5px)",
                maxWidth: "80%",
                width: "75%",
                margin: "0 auto",
                padding: "30px",
                color: "white",
              }}>
              <form onSubmit={handleSubmit} action="/"
                method="post"
                autoComplete="on">
                <div className="checkout-menu">
                  <div className="checkout-list">
                    <TextField id="outlined-basic" className="checkout-fields" label="Card Number" variant="outlined" disabled sx={{ ...checkoutMuiStyling }} />
                    <br></br>
                    <br></br>
                    <div className="expiration-date">
                      <TextField id="outlined-basic" className="checkout-fields" label="Expiration Day" variant="outlined" disabled sx={{ ...checkoutMuiStyling }} />
                      <span className="expiration-slash">/</span>
                      <TextField id="outlined-basic" className="checkout-fields" label="Expiration Year" variant="outlined" disabled sx={{ ...checkoutMuiStyling }} />
                    </div>
                    <br></br>
                    <br></br>
                    <TextField id="outlined-basic" className="checkout-fields" label="CVV" variant="outlined" disabled sx={{ ...checkoutMuiStyling }} />
                    <br></br>
                    <br></br>
                    <TextField id="outlined-basic" className="checkout-fields" label="First Name" variant="outlined" name="firstname" required sx={{ ...checkoutMuiStyling }} value={userEmailInfo.firstname} onChange={handleChange} />
                    <br></br>
                    <br></br>
                    <TextField id="outlined-basic" className="checkout-fields" label="Last Name" variant="outlined" name="lastname" sx={{ ...checkoutMuiStyling }} disabled />
                    <br></br>
                    <br></br>
                    <TextField id="outlined-basic" defaultValue="USA" className="checkout-fields" label="Country" variant="outlined" select value={userEmailInfo.country} name="country" required onChange={handleChange} sx={{ ...checkoutMuiStyling }}>
                      {countries.map((option) => (
                        <MenuItem key={option.country} value={option.country}>
                          {option.country}
                        </MenuItem>
                      ))}
                    </TextField>
                    <br></br>
                    <br></br>
                    <TextField id="outlined-basic" className="checkout-fields" label="Billing Address" variant="outlined" disabled sx={{ ...checkoutMuiStyling }} />
                    <TextField id="outlined-basic" className="checkout-fields" label="Billing Address Continued" variant="outlined" disabled sx={{ ...checkoutMuiStyling }} />
                    <br></br>
                    <br></br>
                    <TextField id="outlined-basic" className="checkout-fields" label="City" select variant="outlined" defaultValue="Los Angeles" sx={{ ...checkoutMuiStyling }} value={userEmailInfo.city} name="city" required onChange={handleChange} >
                      {city.map((option) => (
                        <MenuItem key={option.city} value={option.city}>
                          {option.city}
                        </MenuItem>
                      ))}
                    </TextField>
                    <br></br>
                    <br></br>
                    <TextField id="outlined-basic" className="checkout-fields" label="State" select variant="outlined" defaultValue="California" sx={{ ...checkoutMuiStyling }} value={userEmailInfo.state} name="state" required onChange={handleChange} >
                      {state.map((option) => (
                        <MenuItem key={option.state} value={option.state}>
                          {option.state}
                        </MenuItem>
                      ))}
                    </TextField>
                    <br></br>
                    <br></br>
                    <TextField id="outlined-basic" className="checkout-fields" label="ZIP" variant="outlined" select defaultValue="90210" sx={{ ...checkoutMuiStyling }} value={userEmailInfo.zip} name="zip" required onChange={handleChange}>
                      {zip.map((option) => (
                        <MenuItem key={option.zip} value={option.zip}>
                          {option.zip}
                        </MenuItem>
                      ))}
                    </TextField>
                    <br></br>
                    <br></br>
                    <TextField id="outlined-basic" className="checkout-fields" label="Phone" variant="outlined" disabled sx={{ ...checkoutMuiStyling }} />
                    <br></br>
                    <br></br>
                    <TextField id="outlined-basic" className="checkout-fields" label="Email" variant="outlined" name="email" required sx={{ ...checkoutMuiStyling }} value={userEmailInfo.email} onChange={handleChange} />
                    <br></br>
                    <br></br>
                    {checkoutErr && <h3 className="error">{checkoutErr}</h3>}
                  </div>
                  <div className="checkout-values-header-container">
                    <h1 className="checkout-values-header">Cart Items</h1>
                    <div className="checkout-values">
                      {cartData?.length !== 0 ? <Checkoutitems details={cartData} /> : <h1>There is no checkout data to show..</h1>}
                    </div>
                  </div>
                </div>
                <div className="checkout-total-section">
                  <h2 className="checkout-total">Your Total: &#36;{checkoutTotal()}</h2>
                </div>
                <Button color="error"
                  sx={{ fontSize: "1.0em", marginTop: "50px", "&:hover": { backgroundColor: "red", color: "white" }, marginBottom: "25px" }}
                  variant="outlined" endIcon={<SendIcon />} type="submit">
                  Pay Now
                </Button>
              </form>
            </Box>
          </div>
        ) : (
          <LoadingCircle />
        )
      )
  )
}

export default Checkout