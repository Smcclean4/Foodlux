import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import SendIcon from '@mui/icons-material/Send'
import TextField from "@mui/material/TextField";
import MenuItem from '@mui/material/MenuItem';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Checkoutitems from "../components/Checkoutitems"
import "../stylesheets/Checkout.css"
import { LoadingCircle } from '../tools/LoadingCircle';
import { CartInfoInterface } from "../api/Categories";
import { Foodluxbus } from '../tools/Foodluxbus';

const Checkout = () => {

  const [checkoutData, setCheckoutData] = useState<CartInfoInterface[]>([])
  const [seconds, setSeconds] = useState(15);
  const [submitting, setSubmitting] = useState(false)
  const [loading, setLoading] = useState(true)

  const location: any = useLocation();
  const navigate = useNavigate();
  const cartData = location.state?.cart


  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("submitting payment info!")
    setSubmitting(true)
    const submitData = async () => {
      await new Promise(() => setTimeout(() => {
        localStorage.removeItem('cart')
        navigate('/Home')
      }, 15000))
    }
    submitData();
  }

  const checkoutTotal = () => {
    return checkoutData.map((item) => item.price).reduce((acc: string, val: string) => (parseFloat(acc) + parseFloat(val)).toFixed(2), 0)
  }

  useEffect(() => {
    const loadData = async () => {
      await new Promise((p) => setTimeout(p, 1000));
      setLoading((loading) => !loading)
    }
    loadData();
    setCheckoutData(cartData)
  }, [])

  const countries = [
    {
      country: "USA"
    },
    {
      country: "United Kindom"
    }, {
      country: "Uganda"
    }
  ]

  const city = [
    {
      country: "Compton"
    },
    {
      country: "Los Angeles"
    }, {
      country: "Lewiston"
    }
  ]

  const state = [
    {
      country: "California"
    },
    {
      country: "Bucharest"
    }, {
      country: "Texas"
    }
  ]

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
              <form onSubmit={handleSubmit}>
                <div className="checkout-menu">
                  <div className="checkout-list">
                    <TextField id="outlined-basic" className="checkout-fields" label="Card Number" variant="outlined" sx={{ ...checkoutMuiStyling }} />
                    <br></br>
                    <br></br>
                    <div className="expiration-date">
                      <TextField id="outlined-basic" className="checkout-fields" label="Expiration Day" variant="outlined" sx={{ ...checkoutMuiStyling, width: "40%" }} />
                      <span className="expiration-slash">/</span>
                      <TextField id="outlined-basic" className="checkout-fields" label="Expiration Year" variant="outlined" sx={{ ...checkoutMuiStyling, width: "50%" }} />
                    </div>
                    <br></br>
                    <br></br>
                    <TextField id="outlined-basic" className="checkout-fields" label="CVV" variant="outlined" sx={{ ...checkoutMuiStyling }} />
                    <br></br>
                    <br></br>
                    <TextField id="outlined-basic" className="checkout-fields" label="First Name" variant="outlined" sx={{ ...checkoutMuiStyling }} />
                    <br></br>
                    <br></br>
                    <TextField id="outlined-basic" className="checkout-fields" label="Last Name" variant="outlined" sx={{ ...checkoutMuiStyling }} />
                    <br></br>
                    <br></br>
                    <TextField id="outlined-basic" defaultValue="USA" className="checkout-fields" label="Country" variant="outlined" select sx={{ ...checkoutMuiStyling }}>
                      {countries.map((option) => (
                        <MenuItem key={option.country} value={option.country}>
                          {option.country}
                        </MenuItem>
                      ))}
                    </TextField>
                    <br></br>
                    <br></br>
                    <TextField id="outlined-basic" className="checkout-fields" label="Billing Address" variant="outlined" sx={{ ...checkoutMuiStyling }} />
                    <TextField id="outlined-basic" className="checkout-fields" label="Billing Address Continued" variant="outlined" sx={{ ...checkoutMuiStyling }} />
                    <br></br>
                    <br></br>
                    <TextField id="outlined-basic" className="checkout-fields" label="City" select variant="outlined" defaultValue="Compton" sx={{ ...checkoutMuiStyling }}>
                      {city.map((option) => (
                        <MenuItem key={option.country} value={option.country}>
                          {option.country}
                        </MenuItem>
                      ))}
                    </TextField>
                    <br></br>
                    <br></br>
                    <TextField id="outlined-basic" className="checkout-fields" label="State" select variant="outlined" defaultValue="California" sx={{ ...checkoutMuiStyling }}>
                      {state.map((option) => (
                        <MenuItem key={option.country} value={option.country}>
                          {option.country}
                        </MenuItem>
                      ))}
                    </TextField>
                    <br></br>
                    <br></br>
                    <TextField id="outlined-basic" className="checkout-fields" label="ZIP" variant="outlined" sx={{ ...checkoutMuiStyling }} />
                    <br></br>
                    <br></br>
                    <TextField id="outlined-basic" className="checkout-fields" label="Phone" variant="outlined" sx={{ ...checkoutMuiStyling }} />
                    <br></br>
                    <br></br>
                    <TextField id="outlined-basic" className="checkout-fields" label="Email" variant="outlined" sx={{ ...checkoutMuiStyling }} />
                  </div>
                  <div className="checkout-values-header-container">
                    <h1 className="checkout-values-header">Cart Items</h1>
                    <div className="checkout-values">
                      {checkoutData?.length !== 0 ? <Checkoutitems details={checkoutData} /> : <h1>There is no checkout data to show..</h1>}
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