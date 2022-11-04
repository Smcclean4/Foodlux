import React from 'react'
import "../stylesheets/Checkout.css"

const Checkout = () => {
  return (
    <div className="checkout-background">
      <div className="checkout-window">
        <h2>Credit or Debit Cart Payment</h2>
        <form>
          <ul>
            <li>
              <label className="checkout-labels">Card Number</label>
              <input type="text" />
            </li>
              <li>
              <label className="checkout-labels">Expiration Date</label>
              <input type="text" />
              <input type="text" />
              </li>
              <li>
              <label className="checkout-labels">CVV</label>
              <input type="text" />
              </li>
              <li>
              <label className="checkout-labels">First Name</label>
              <input type="text" />
                </li>
              <li>
              <label className="checkout-labels">Last Name</label>
              <input type="text" />
              </li>
              <li>
              <label className="checkout-labels">Country</label>
              <input list="countries" type="text" />
              <datalist id="countries">
                <option value="list all countries" />
              </datalist>
              </li>
              <li>
              <label className="checkout-labels">Billing Address</label>
              <input type="text" />
              <input type="text" />
              </li>
              <li>
              <label className="checkout-labels">City</label>
              <input type="text" />
              </li>
              <li>
              <label className="checkout-labels">State</label>
              <input list="states" type="text" />
              <datalist id="states">
                <option value="list all states within the country" />
              </datalist>
              </li>
              <li>
              <label className="checkout-labels">ZIP</label>
              <input type="text" />
              </li>
              <li>
              <label className="checkout-labels">Phone Number</label>
              <input type="text" />
              </li>
              <li>
              <label className="checkout-labels">Email Address</label>
              <input type="text" />
            </li>
          </ul>
        </form>
      </div>
    </div>
  )
}

export default Checkout