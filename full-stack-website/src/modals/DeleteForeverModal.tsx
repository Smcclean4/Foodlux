import React from 'react'
import { createPortal } from 'react-dom'
import Button from "@mui/material/Button";
import '../stylesheets/DeleteForeverModal.css'
import { red } from '@mui/material/colors';

export const DeleteForeverModal = ({ isShowing, hide, item }) => isShowing ? createPortal(
  <React.Fragment>
    <div className="deleteforevermodal-container">
      <h1 className="deleteforevermodal-header">Preparing to delete item.</h1>
      <p className="deleteforevermodal-subtext">Are you sure you want to delete {item} from your cart?</p>
      <div className="button-options">
        <Button sx={{
          backgroundColor: "grey", color: "white", "&:hover": {
            backgroundColor: "lightgrey"
          }, margin: "20px", fontSize: "1.1em"
        }}
          onClick={hide}>
          Cancel
        </Button>
        <Button sx={{
          backgroundColor: "red", color: "white", "&:hover": {
            backgroundColor: "rgb(162, 6, 6)"
          }, margin: "20px", fontSize: "1.1em"
        }}>
          Proceed
        </Button>
      </div>
    </div>
  </React.Fragment>, document.body
) : null