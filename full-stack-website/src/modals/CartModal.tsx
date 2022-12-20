import React from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import '../stylesheets/CartModal.css'

export const CartModal = ({ isShowing, hide, state }) => isShowing ? createPortal(
  <React.Fragment>
    <div className="cartmodal-container">
      <button className="cartmodal-close" onClick={hide}>
        &times;
      </button>
      <h1>Hello, I am a Cart Modal</h1>
      <div className="modal-point"></div>
      <button className="cartmodal-link">
        <Link to="/Cart" state={{ data: state }}>
          Go to cart
        </Link>
      </button>
    </div>
  </React.Fragment>, document.body
) : null
