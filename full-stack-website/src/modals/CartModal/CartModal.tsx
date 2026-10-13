import React from 'react'
import { Link } from 'react-router-dom'
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/Close";
import '../../stylesheets/CartModal.css'

export const CartModal = ({ isShowing, hide, state }) => (
  <Drawer anchor="right" open={Boolean(isShowing)} onClose={hide}>
    <Box className="cartmodal-container" data-testid="cartmodal-test" sx={{ width: { xs: 300, sm: 360 }, p: 2, display: "flex", flexDirection: "column", height: "100%" }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5">Cart</Typography>
        <IconButton className="cartmodal-close" onClick={hide} data-testid="cartmodal-close" aria-label="Close cart">
          <CloseIcon />
        </IconButton>
      </Stack>
      <Divider sx={{ my: 1 }} />
      <Box className="modal-data glass-scroll" sx={{ flexGrow: 1, overflow: "auto" }}>
        {state?.map((item: { item: string; price: number; quantity: number; }, idx: React.Key) => (
          <Stack key={idx} className="modal-data-container" direction="row" justifyContent="space-between" sx={{ py: 1.5, px: 1 }}>
            <Typography className="modal-data-items">{item.item}</Typography>
            <Typography className="modal-data-items">${item.price}</Typography>
            <Typography className="modal-data-items">x{item.quantity}</Typography>
          </Stack>
        ))}
        {state?.length === 0 ? <Typography variant="h6" sx={{ mt: 4 }}>Nothing to see here...</Typography> : null}
      </Box>
      <Button
        component={Link}
        to="/Cart"
        className="gotocart-link"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
      >
        Go To Cart
      </Button>
    </Box>
  </Drawer>
)
