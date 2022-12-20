import React from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import '../stylesheets/CartModal.css'

export const CartModal = ({ isShowing, hide, state }) => isShowing ? createPortal(
  <React.Fragment>
    <div className="modal-point"></div>
    <div className="cartmodal-container">
      <button className="cartmodal-close" onClick={hide}>
        &times;
      </button>
      <div className="modal-data">
        {state?.map((item, idx) => {
          return state?.length !== 0 ? (
            <div className="modal-data-container" key={idx}>
              <p className="modal-data-items">{item.item}</p>
              <p className="modal-data-items">{item.price}</p>
              <p className="modal-data-items">{item.quantity}</p>
            </div>
          ) : ""
        })}
      </div>
      {state?.length === 0 ? <h1>Nothing to see here...</h1> : null}
      <Link to="/Cart" state={{ data: state }}>
        <button className="cartmodal-link">
          Go to cart
        </button>
      </Link>
    </div>
  </React.Fragment>, document.body
) : null
