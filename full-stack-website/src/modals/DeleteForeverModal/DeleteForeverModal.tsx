import React from 'react'
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";
import '../../stylesheets/DeleteForeverModal.css'

export const DeleteForeverModal = ({ isShowing, hide, item, deleteitem }) => (
  <Dialog
    open={Boolean(isShowing)}
    onClose={hide}
    className="deleteforevermodal-container"
    PaperProps={{ "data-testid": "deleteforvermodal-test" } as any}
  >
    <DialogTitle className="deleteforevermodal-header">Preparing to delete item.</DialogTitle>
    <DialogContent>
      <Typography className="deleteforevermodal-subtext">
        Are you sure you want to delete your {item.deleteCompany} {item.deleteItemName} from your cart?
      </Typography>
    </DialogContent>
    <DialogActions className="button-options" sx={{ px: 3, pb: 2 }}>
      <Button
        variant="contained"
        color="secondary"
        onClick={hide}
        data-testid="deleteforevermodal-close"
      >
        Cancel
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={deleteitem}
        data-testid="deleteforevermodal-proceed"
      >
        Proceed
      </Button>
    </DialogActions>
  </Dialog>
)
