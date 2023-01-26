import React from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import Button from "@mui/material/Button";
import '../stylesheets/CartModal.css'

export const CartModal = ({ isShowing, hide, state }) => isShowing ? createPortal(
  <React.Fragment>
    <div className="cartmodal-container">
      <button className="cartmodal-close" onClick={hide}>
        &times;
      </button>
      <div className="modal-data">
        {state?.map((item, idx) => {
          return state?.length !== 0 ? (
            <div className="modal-data-container" key={idx}>
              <p className="modal-data-items">{item.item}</p>
              <p className="modal-data-items">&#36;{item.price}</p>
              <p className="modal-data-items">{item.quantity}</p>
            </div>
          ) : ""
        })}
      </div>
      {state?.length === 0 ? <h2>Nothing to see here...</h2> : null}
      <Button sx={{
        color: 'white', backgroundColor: 'red', padding: '5px 25px', margin: '5px', "&:hover": {
          backgroundColor: "rgb(162, 6, 6)",
        },
      }}>
        <Link to="/Cart" className="gotocart-link">
          Go to cart
        </Link>
      </Button>
    </div>
  </React.Fragment>, document.body
) : null
