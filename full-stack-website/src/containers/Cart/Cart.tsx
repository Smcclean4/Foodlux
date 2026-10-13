import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from "react-router-dom";
import Cartitems from "../../components/Cartitems/Cartitems";
import { CartInfoInterface } from "../../api/Categories/Categories";
import { Categories } from "../../api/Categories/Categories"
import { useModal } from "../../hooks/useModal"
import { DeleteForeverModal } from "../../modals/DeleteForeverModal/DeleteForeverModal";
import { glassPanelSx } from "../../theme";

const Cart = () => {
  const cartFromHomeLocalStorage: CartInfoInterface[] = JSON.parse(localStorage.getItem('cart') || '[]')
  const [cartInfo, setCartInfo] = useState<CartInfoInterface[]>(cartFromHomeLocalStorage)
  const [deleteItem, setDeleteItem] = useState({ deleteItemName: '', deleteCompany: '' })
  const { isShowing, toggle } = useModal();
  const { fastfood, finedine, snacks, alcohol }: any = Categories()
  const categories = [fastfood, finedine, snacks, alcohol]
  const home: any[] = []
  categories?.forEach((menu: any[]) => menu.map((food: { menu: any[]; }) => food.menu.map((items) => home.push(items))))

  const cartTotal = () => {
    return cartInfo.map((item) => item.price).reduce((acc, val) => (Number(acc) + Number(val)).toFixed(2), 0)
  }

  const addItem = (ID: number) => {
    setCartInfo((info) => info?.map((item, i) => {
      let homeValueAtId: number[] = []
      home.filter((val, i) => val.item.includes(item.item) && val.company.includes(item.company) ? homeValueAtId.push(home[i].price) : 0)
      return i === ID ? { ...item, price: (Number(item.price) + Number(homeValueAtId)).toFixed(2), quantity: item.quantity + 1 } : item
    }));
  }

  const removeItem = (ID: number) => {
    if (cartInfo[ID].quantity !== 1) {
      setCartInfo((info) => info?.map((item, i) => {
        let homeValueAtId: number[] = []
        home.filter((val, i) => val.item.includes(item.item) && val.company.includes(item.company) ? homeValueAtId.push(home[i].price) : 0)
        return i === ID ? { ...item, price: (Number(item.price) - Number(homeValueAtId)).toFixed(2), quantity: item.quantity - 1 } : item
      }));
    }
    if (cartInfo[ID].quantity === 1) {
      setDeleteItem({ deleteItemName: cartInfo[ID].item, deleteCompany: cartInfo[ID].company })
      toggle()
    }
  }

  const deleteItemFromCart = () => {
    setCartInfo((state) => state.filter((val, i) => {
      if (!cartInfo[i].company.includes(deleteItem.deleteCompany) || !cartInfo[i].item.includes(deleteItem.deleteItemName)) {
        return val
      } else {
        return false
      }
    }))
    toggle()
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartInfo))
  }, [cartInfo])

  return (
    <div className="page-background cart-background" data-testid="Cart">
      <Stack className="checkout-return-section" direction="row" justifyContent="space-around" sx={{ pt: 2 }}>
        <Link className="return-link" to="/Home">
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<ArrowBackIosIcon />}
            data-testid="home-button-test"
          >
            <span className="link-text">Home</span>
          </Button>
        </Link>
        <Link className="checkout-link" to="/Checkout" state={{ cart: cartInfo }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            endIcon={<ArrowForwardIosIcon />}
            data-testid="checkout-button-test"
          >
            <span className="link-text">Checkout</span>
          </Button>
        </Link>
      </Stack>
      <Typography variant="h3" className="cart-header" sx={{ width: "90%", maxWidth: 1200, mx: "auto", mt: 2, py: 1, bgcolor: "secondary.main", color: "common.white" }}>
        Cart
      </Typography>
      <Paper
        className="cart-window glass-scroll"
        elevation={0}
        sx={{ ...glassPanelSx, width: "90%", maxWidth: 1200, mx: "auto", minHeight: "50vh", maxHeight: "65vh", p: 3 }}
      >
        {cartInfo?.length === 0 ? (
          <Box className="cart-dummydata" sx={{ py: 8 }}>
            <Typography variant="h4">Your cart is empty</Typography>
            <Typography variant="h6" sx={{ mt: 2 }}>Head back to the menu and add a few favorites.</Typography>
            <Typography variant="h3" sx={{ mt: 3 }} aria-hidden>🍔</Typography>
            <Button component={Link} to="/Home" variant="contained" color="primary" sx={{ mt: 3 }}>
              Back to menu
            </Button>
          </Box>
        ) : (
          <Cartitems items={cartInfo} additem={addItem} removeitem={removeItem} />
        )}
        <DeleteForeverModal isShowing={isShowing} hide={toggle} item={deleteItem} deleteitem={deleteItemFromCart} />
      </Paper>
      <Box className="total-section" sx={{ width: "90%", maxWidth: 1200, mx: "auto", display: "flex", justifyContent: "flex-end" }}>
        <Typography variant="h5" className="total" sx={{ bgcolor: "secondary.main", color: "common.white", px: 4, py: 1.5, borderRadius: "0 0 12px 12px" }}>
          Total: ${cartTotal()}
        </Typography>
      </Box>
    </div>
  );
};

export default Cart;
