import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from "react-router-dom";
import Cartitems from "../components/Cartitems";
import { LoadingCircle } from "../tools/LoadingCircle";
import { CartInfoInterface } from "../api/Categories";
import { Categories } from "../api/Categories"
import { useModal } from "../hooks/useModal"
import { DeleteForeverModal } from "../modals/DeleteForeverModal";
import "../stylesheets/Cart.css";

const Cart = () => {
  // putting home cart local storage into variable with the cart info interface structure
  const cartFromHomeLocalStorage: CartInfoInterface[] = JSON.parse(localStorage.getItem('cart') || '[]')
  // storing cart info into state
  const [cartInfo, setCartInfo] = useState<CartInfoInterface[]>(cartFromHomeLocalStorage)
  // stores the item that is looking to be deleted and the company that is looking to be deleted
  const [deleteItem, setDeleteItem] = useState({ deleteItemName: '', deleteCompany: '' })
  // set loading state for loading animation between pages
  const [loading, setLoading] = useState(true)
  // delete modal hook that shows whether the modal is showing (true or false) or not and also toggle which changes this value
  const { isShowing, toggle } = useModal();
  // all category names and its values 
  const { fastfood, finedine, snacks, alcohol }: any = Categories()
  // array of all categories and values that are being passed to search bar
  const categories = [fastfood, finedine, snacks, alcohol]
  // push specific items that are in home into this variable
  const home: any[] = []
  // all items that are being mapped through
  categories?.forEach((menu: any[]) => menu.map((food: { menu: any[]; }) => food.menu.map((items) => home.push(items))))
  // gets the total price of the items that are currently in the cart
  const cartTotal = () => {
    return cartInfo.map((item) => item.price).reduce((acc, val) => (Number(acc) + Number(val)).toFixed(2), 0)
  }
  // add the item and increases price if add button is being clicked.. creates a copy and also filters if the items is included in the section that is clicked.
  const addItem = (ID: number) => {
    setCartInfo((info) => info?.map((item, i) => {
      let homeValueAtId: number[] = []
      home.filter((val, i) => val.item.includes(item.item) && val.company.includes(item.company) ? homeValueAtId.push(home[i].price) : 0)
      return i === ID ? { ...item, price: (Number(item.price) + Number(homeValueAtId)).toFixed(2), quantity: item.quantity + 1 } : item
    }));
  }
  // delete the item and increases price if delete button is being clicked.. creates a copy and also filters if the items is included in the section that is clicked.
  const removeItem = (ID: number) => {
    if (cartInfo[ID].quantity !== 1) {
      setCartInfo((info) => info?.map((item, i) => {
        let homeValueAtId: number[] = []
        home.filter((val, i) => val.item.includes(item.item) && val.company.includes(item.company) ? homeValueAtId.push(home[i].price) : 0)
        return i === ID ? { ...item, price: (Number(item.price) - Number(homeValueAtId)).toFixed(2), quantity: item.quantity - 1 } : item
      }));
    }
    // if the quantity is equal to  1 show the trash icon, store potentially deleted item and company into state, and toggle delete forever modal
    if (cartInfo[ID].quantity === 1) {
      setDeleteItem({ deleteItemName: cartInfo[ID].item, deleteCompany: cartInfo[ID].company })
      toggle()
    }
  }
  // if the user wants to delete item from cart the cart then filters that item out of the current cart and just includes left over items
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
  // loading effect for loading animation
  useEffect(() => {
    const loadData = async () => {
      await new Promise((p) => setTimeout(p, 1000));
      setLoading((loading) => !loading);
    }
    loadData();
  }, [])
  // stores item into local storage each time the cart is modified
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartInfo))
  }, [cartInfo])

  return (
    !loading ? (
      <div className="cart-background">
        <div className="checkout-return-section">
          <div className="return-section">
            <Link className="return-link" to="/Home">
              <Button
                variant="contained"
                size="medium"
                sx={{
                  backgroundColor: "red",
                  "&:hover": {
                    backgroundColor: "rgb(162, 6, 6)",
                  },
                  margin: "20px"
                }}
                startIcon={<ArrowBackIosIcon />}
              >
                <span className="link-text">Home</span>
              </Button>
            </Link>
          </div>
          <div className="checkout-section">
            <Link className="checkout-link" to="/Checkout" state={{ cart: cartInfo }}>
              <Button
                variant="contained"
                size="medium"
                sx={{
                  backgroundColor: "red",
                  "&:hover": {
                    backgroundColor: "rgb(162, 6, 6)",
                  },
                  margin: "20px",
                }}
                endIcon={<ArrowForwardIosIcon />}>
                <span className="link-text">Checkout</span>
              </Button>
            </Link>
          </div>
        </div>
        <p className="cart-header">Cart</p>
        <div className="cart-window">
          {cartInfo?.length !== 0 ? <Cartitems items={cartInfo} additem={addItem} removeitem={removeItem} /> :
            <div className="cart-dummydata">
              <h1>YOUR CART IS EMPTY!</h1>
              <br></br>
              <br></br>
              <h1>PLEASE RETURN WHEN YOUVE CHECKED OUT THE STORE AND PURCHASED SOME ITEMS</h1>
              <br></br>
              <br></br>
              <h1>🍔</h1>
            </div>}
          <DeleteForeverModal isShowing={isShowing} hide={toggle} item={deleteItem} deleteitem={deleteItemFromCart} />
        </div>
        <div className="total-section">
          <h2 className="total">Total: &#36;{cartTotal()}</h2>
        </div>
      </div>
    ) : (
      <LoadingCircle />
    )
  );
};

export default Cart;