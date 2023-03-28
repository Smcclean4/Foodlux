import React from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import Button from "@mui/material/Button";
import '../../stylesheets/CartModal.css'

export const CartModal = ({ isShowing, hide, state }) => isShowing ? createPortal(
  <div className="cartmodal-container" data-testid="cartmodal-test">
    <button className="cartmodal-close" onClick={hide} data-testid="cartmodal-close">
      &times;
    </button>
    <div className="modal-data">
      {state?.map((item: { item: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; price: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; quantity: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }, idx: React.Key | null | undefined) => {
        return state?.length !== 0 ? (
          <div className="modal-data-container" key={idx}>
            <p className="modal-data-items">{item.item}</p>
            <p className="modal-data-items">&#36;{item.price}</p>
            <p className="modal-data-items">{item.quantity}</p>
          </div>
        ) : null
      })}
      {state?.length === 0 ? <h2>Nothing to see here...</h2> : null}
    </div>
    <Link to="/Cart" className="gotocart-link">
      <Button sx={{
        color: 'white', backgroundColor: 'red', padding: '5px 25px', margin: '5px', "&:hover": {
          backgroundColor: "rgb(162, 6, 6)",
        },
      }}>
        Go To Cart
      </Button>
    </Link>
  </div>, document.body
) : null
