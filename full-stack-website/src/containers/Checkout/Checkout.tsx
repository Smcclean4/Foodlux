import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send'
import TextField from "@mui/material/TextField";
import MenuItem from '@mui/material/MenuItem';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Checkoutitems from "../../components/Checkoutitems/Checkoutitems"
import { Foodluxbus } from '../../tools/Foodluxbus/Foodluxbus';
import axios from 'axios';
import { darkTextFieldSx, glassPanelSx } from '../../theme';

export interface UserEmailInfoInterface {
  firstname: string;
  country: string;
  city: string;
  state: string;
  zip: string;
  email: string;
}

const Checkout = () => {
  const location: any = useLocation();
  const cartData = location.state?.cart
  const [seconds, setSeconds] = useState(15);
  const [submitting, setSubmitting] = useState(false)
  const [checkoutErr, setCheckoutErr] = useState('')
  const [userEmailInfo, setUserEmailInfo] = useState<UserEmailInfoInterface>({
    firstname: "",
    country: "",
    city: "",
    state: "",
    zip: "",
    email: ""
  })

  const handleChange = ({ target: input }: { target: { name: string; value: string; }; }) => {
    setUserEmailInfo({ ...userEmailInfo, [input.name]: input.value })
  }

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    try {
      if (cartData?.length > 0) {
        setSubmitting(true)
        await axios.post(`https://${process.env.REACT_APP_PORT}/sendEmail`, userEmailInfo).then(res => console.log(res.data)).catch(err => console.log(err))
      } else {
        setCheckoutErr("Checkout once you've added something to your Cart!")
      }
    } catch (error) {
      if (error instanceof Error) {
        setCheckoutErr(error.message)
      }
    }
  }

  const checkoutTotal = () => {
    return cartData?.map((item: { price: any; }) => item.price).reduce((acc: string, val: string) => (parseFloat(acc) + parseFloat(val)).toFixed(2), 0)
  }

  const countries = [{ country: "USA" }]
  const city = [{ city: "Compton" }, { city: "Los Angeles" }, { city: "Santa Monica" }]
  const state = [{ state: "California" }, { state: "New York" }, { state: "Texas" }]
  const zip = [{ zip: "90210" }, { zip: "90220" }, { zip: "90260" }]
  const fieldSx = { ...darkTextFieldSx, width: "100%" };

  return (
    submitting ? <Foodluxbus timer={seconds} settimer={setSeconds} /> :
      (
        <div className="page-background checkout-background" data-testid="Checkout">
          <Box className="cart-section" sx={{ width: "90%", maxWidth: 1200, mx: "auto", pt: 2, display: "flex" }}>
            <Link className="cart-link" to="/Cart">
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<ArrowBackIosIcon />}
                data-testid='cart-button-test'>
                <p className="link-text">Cart</p>
              </Button>
            </Link>
          </Box>
          <Typography variant="h3" className="checkout-header" sx={{ width: "90%", maxWidth: 1200, mx: "auto", mt: 2, py: 1.5, bgcolor: "secondary.main", color: "common.white" }}>
            Credit/Debit Card Payment
          </Typography>
          <Paper
            className="checkout-window glass-scroll"
            elevation={0}
            sx={{ ...glassPanelSx, width: "90%", maxWidth: 1200, mx: "auto", minHeight: "50vh", maxHeight: "70vh", p: { xs: 2, md: 4 } }}
          >
            <form
              onSubmit={handleSubmit}
              action="/"
              method="post"
              autoComplete="on"
              data-testid="Email">
              <Grid container spacing={4} className="checkout-menu">
                <Grid item xs={12} md={6} className="checkout-list">
                  <Stack spacing={2}>
                    <TextField
                      id="outlined-basic"
                      className="checkout-fields"
                      label="Card Number"
                      disabled
                      sx={fieldSx}
                      name="cardnumber" />
                    <Stack className="expiration-date" direction="row" spacing={2} alignItems="center">
                      <TextField
                        id="outlined-basic"
                        className="checkout-fields"
                        label="Expiration Day"
                        disabled
                        sx={fieldSx}
                        name="expirationday" />
                      <span className="expiration-slash">/</span>
                      <TextField
                        id="outlined-basic"
                        className="checkout-fields"
                        label="Expiration Year"
                        disabled
                        sx={fieldSx}
                        name="expirationyear" />
                    </Stack>
                    <TextField
                      id="outlined-basic"
                      className="checkout-fields"
                      label="CVV"
                      disabled
                      sx={fieldSx}
                      name="cvv" />
                    <TextField
                      id="outlined-basic"
                      className="checkout-fields"
                      label="First Name"
                      name="firstname"
                      required
                      sx={fieldSx}
                      value={userEmailInfo.firstname}
                      onChange={handleChange}
                      inputProps={{ "data-testid": "firstname-input" }} />
                    <TextField
                      id="outlined-basic"
                      className="checkout-fields"
                      label="Last Name"
                      name="lastname"
                      sx={fieldSx}
                      disabled />
                    <TextField
                      id="outlined-basic"
                      defaultValue="USA"
                      className="checkout-fields"
                      label="Country"
                      select
                      value={userEmailInfo.country}
                      name="country"
                      required
                      onChange={handleChange}
                      sx={fieldSx}
                      inputProps={{ "data-testid": "country-input" }}>
                      {countries.map((option) => (
                        <MenuItem key={option.country} value={option.country}>
                          {option.country}
                        </MenuItem>
                      ))}
                    </TextField>
                    <TextField
                      id="outlined-basic"
                      className="checkout-fields"
                      label="Billing Address"
                      disabled
                      sx={fieldSx} />
                    <TextField
                      id="outlined-basic"
                      className="checkout-fields"
                      label="Billing Address Continued"
                      disabled
                      sx={fieldSx} />
                    <TextField
                      id="outlined-basic"
                      className="checkout-fields"
                      label="City"
                      select
                      defaultValue="Los Angeles"
                      sx={fieldSx}
                      value={userEmailInfo.city}
                      name="city"
                      required
                      onChange={handleChange}
                      inputProps={{ "data-testid": "city-input" }}>
                      {city.map((option) => (
                        <MenuItem key={option.city} value={option.city}>
                          {option.city}
                        </MenuItem>
                      ))}
                    </TextField>
                    <TextField
                      id="outlined-basic"
                      className="checkout-fields"
                      label="State"
                      select
                      defaultValue="California"
                      sx={fieldSx}
                      value={userEmailInfo.state}
                      name="state"
                      required
                      onChange={handleChange}
                      inputProps={{ "data-testid": "state-input" }}>
                      {state.map((option) => (
                        <MenuItem key={option.state} value={option.state}>
                          {option.state}
                        </MenuItem>
                      ))}
                    </TextField>
                    <TextField
                      id="outlined-basic"
                      className="checkout-fields"
                      label="ZIP"
                      select
                      defaultValue="90210"
                      sx={fieldSx}
                      value={userEmailInfo.zip}
                      name="zip"
                      required
                      onChange={handleChange}
                      inputProps={{ "data-testid": "zip-input" }}>
                      {zip.map((option) => (
                        <MenuItem key={option.zip} value={option.zip}>
                          {option.zip}
                        </MenuItem>
                      ))}
                    </TextField>
                    <TextField
                      id="outlined-basic"
                      className="checkout-fields"
                      label="Phone"
                      disabled
                      sx={fieldSx} />
                    <TextField
                      id="outlined-basic"
                      className="checkout-fields"
                      label="Email"
                      name="email"
                      required
                      sx={fieldSx}
                      value={userEmailInfo.email}
                      onChange={handleChange}
                      inputProps={{ "data-testid": "email-input" }} />
                    {checkoutErr && <Alert severity="error" className="error">{checkoutErr}</Alert>}
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6} className="checkout-values-header-container">
                  <Typography variant="h4" className="checkout-values-header" sx={{ color: "common.white", mb: 2 }}>Cart Items</Typography>
                  <Box className="checkout-values glass-scroll" sx={{ border: "1px solid rgba(255,255,255,0.2)", borderRadius: 2, p: 2, minHeight: 320 }}>
                    {cartData?.length !== 0 ? <Checkoutitems details={cartData} /> : <Typography variant="h5" className="checkout-dummydata">There is no checkout data to show..</Typography>}
                  </Box>
                </Grid>
              </Grid>
              <Box className="checkout-total-section" sx={{ mt: 3 }}>
                <Typography variant="h5" className="checkout-total" sx={{ color: "common.white" }}>Your Total: ${checkoutTotal()}</Typography>
              </Box>
              <Button
                color="primary"
                variant="contained"
                endIcon={<SendIcon />}
                type="submit"
                name="submit"
                role="button"
                sx={{ mt: 3, mb: 2 }}
              >
                Pay Now
              </Button>
            </form>
          </Paper>
        </div>
      )
  )
}

export default Checkout;
