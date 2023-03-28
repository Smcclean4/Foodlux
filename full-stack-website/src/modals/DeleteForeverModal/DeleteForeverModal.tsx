import React from 'react'
import { createPortal } from 'react-dom'
import Button from "@mui/material/Button";
import '../../stylesheets/DeleteForeverModal.css'

export const DeleteForeverModal = ({ isShowing, hide, item, deleteitem }) => isShowing ? createPortal(
  <div className="deleteforevermodal-container" data-testid="deleteforvermodal-test">
    <h1 className="deleteforevermodal-header">Preparing to delete item.</h1>
    <p className="deleteforevermodal-subtext">Are you sure you want to delete your {item.deleteCompany} {item.deleteItemName} from your cart?</p>
    <div className="button-options">
      <Button sx={{
        backgroundColor: "grey", color: "white", "&:hover": {
          backgroundColor: "lightgrey"
        }, margin: "20px", fontSize: "1.1em"
      }}
        onClick={hide}
        data-testid="deleteforevermodal-close">
        Cancel
      </Button>
      <Button sx={{
        backgroundColor: "red", color: "white", "&:hover": {
          backgroundColor: "rgb(162, 6, 6)"
        }, margin: "20px", fontSize: "1.1em"
      }}
        onClick={deleteitem}
        data-testid="deleteforevermodal-proceed">
        Proceed
      </Button>
    </div>
  </div>, document.body
) : null