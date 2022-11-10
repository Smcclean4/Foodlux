import React from 'react'
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
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
      <div className="checkout-window">
        <h2>Credit or Debit Cart Payment</h2>
        <form onSubmit={handleSubmit}>
              <FormLabel className="checkout-labels">Card Number</FormLabel>
              <Input type="text" />
              <FormLabel className="checkout-labels">Expiration Date</FormLabel>
              <Input type="text" />
              <Input type="text" />
              <FormLabel className="checkout-labels">CVV</FormLabel>
              <Input type="text" />
              <FormLabel className="checkout-labels">First Name</FormLabel>
              <Input type="text" />
              <FormLabel className="checkout-labels">Last Name</FormLabel>
              <Input type="text" />
              <FormLabel className="checkout-labels">Country</FormLabel>
              <Input type="text" />
              <datalist id="countries">
                <option value="list all countries" />
              </datalist>
              <FormLabel className="checkout-labels">Billing Address</FormLabel>
              <Input type="text" />
              <Input type="text" />
              <FormLabel className="checkout-labels">City</FormLabel>
              <Input type="text" />
              <FormLabel className="checkout-labels">State</FormLabel>
              <Input type="text" />
              <datalist id="states">
                <option value="list all states within the country" />
              </datalist>
              <FormLabel className="checkout-labels">ZIP</FormLabel>
              <Input type="text" />
              <FormLabel className="checkout-labels">Phone Number</FormLabel>
              <Input type="text" />
              <FormLabel className="checkout-labels">Email Address</FormLabel>
              <Input type="text" />
        </form>
      </div>
    </div>
  )
}

export default Checkout