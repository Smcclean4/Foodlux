import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import LogoutIcon from '@mui/icons-material/Logout';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Homeitems from "../components/Homeitems";
import { CartModal } from "../modals/CartModal";
import { useModal } from "../hooks/useModal";
import { LoadingCircle } from "../tools/LoadingCircle"
import SearchBar from "./SearchBar";
import { CartInfoInterface } from "../api/Categories";
import { Categories } from "../api/Categories"
import { UserData } from "../api/UserData"
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "../stylesheets/Home.css";

function TabPanel(props: { [x: string]: any; children: any; value: any; index: any; }) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function allyProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const Home = () => {

  // gets cart from local storage and stores it using cartinfointerface 
  const cartFromHomeLocalStorage: CartInfoInterface[] = JSON.parse(localStorage.getItem("cart") || "[]");
  // store cart items that are coming from the home local storage
  const [cart, setCart] = useState<CartInfoInterface[]>(cartFromHomeLocalStorage);
  // cart modal hook that shows whether the modal is showing (true or false) or not and also toggle which changes this value
  const { isShowing, toggle } = useModal();
  // toggles whether company tab is opened or not and changes depending on that info
  const [render, setRender] = useState(false);
  // MUI value that changes the current page that is being displayed depending on the menu
  const [value, setValue] = useState(0);
  const theme = useTheme();
  // all category names and its values 
  const { fastfood, finedine, snacks, alcohol }: any = Categories()
  // array of all categories and values that are being passed to search bar
  const categories = [fastfood, finedine, snacks, alcohol]
  // username data that is being fetched from an external component
  const { username }: any = UserData()
  // item info and company info that is being searched
  const [infoFromSearch, setItemsFromSearch] = useState({ itemFromSearch: '', companyFromSearch: '' })
  // changing values for tabs
  const handleChangeIndex = (index: React.SetStateAction<number>) => {
    setValue(index);
  };
  // changing values for tabs
  const handleChange = (event: any, newValue: React.SetStateAction<number>) => {
    setValue(newValue);
    setRender(false)
  };
  // add item to current cart list
  const addCart = (food: CartInfoInterface) => {
    // push specific items that are in home into this variable
    const home: any[] = []
    // all items that are being mapped through
    categories?.forEach((menu: any[]) => menu.map((food: { menu: any[]; }) => food.menu.map((items) => home.push(items))))
    // check if item that is being added exists
    const itemExists = (item: any, company: any, category: any) => {
      return cart.some((el) => {
        return el.item === item && el.company === company && el.category === category
      })
    }
    // if cart is empty add initial item .. else if go through check
    if (itemExists(food.item, food.company, food.category)) {
      setCart((info) => info?.map((item, i) => {
        let homeValueAtId: number[] = []
        home.filter((val, i) => val.item.includes(item.item) && val.company.includes(item.company) ? homeValueAtId.push(home[i].price) : 0)
        return item.item === food.item && item.company === food.company && item.category === food.category ? { ...item, price: (Number(item.price) + Number(homeValueAtId)).toFixed(2), quantity: item.quantity + 1 } : item
      }))
    } else {
      setCart([...cart, food]);
    }
  };
  // search for item using item, company, category
  // using this function as bait and fishing rod to bring searched information from search component into home component in order to pass it down to homeitems component
  const searchForItem = (searchTermItem: string, searchTermInfo: string) => {
    const { searchTermCompany, searchTermCategory }: any = searchTermInfo;
    // checking whether the category is one of the 4 displayed and if it is navigate to that index
    searchTermCategory === 'fastfood' ? setValue(0) : searchTermCategory === 'finedine' ? setValue(1) : searchTermCategory === 'snacks' ? setValue(2) : searchTermCategory === 'alcohol' ? setValue(3) : setValue(0)
    // store item and company what was searched
    setItemsFromSearch({ itemFromSearch: searchTermItem, companyFromSearch: searchTermCompany })
  }
  // checks whether a company tab is open or not.. if it is opened keep height of window at desired amount else convert to being small
  const checkClosed = () => {
    return render ? "65vh" : ""
  }
  // gets the total number of items in the cart 
  const getCartTotal = () => {
    return cart.reduce((sum: number) => sum + 1, 0);
  };
  // logs out user and removes localstorage tokens so no data is saved upon loggin in again
  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('cart')
    window.location.reload()
    window.location.replace('/')
  }
  // stores item into local storage each time the cart is modified
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="home-background" data-testid="Home">
      <p className="home-logo">Foodlux</p>
      <div className="dynamic-cart-username">
        <h1 className="username">Hi, {`${username}`}!</h1>
        {/* pond for bait and fishing rod that brings in search terms */}
        <SearchBar data={categories} searchforitem={searchForItem} />
        <div className="modal-container">
          <button className="modal-button" onClick={toggle}>
            <ShoppingCartIcon className="cart" />
            <CartModal isShowing={isShowing} hide={toggle} state={cart} />
            <p className="cart-count">{getCartTotal()}</p>
          </button>
        </div>
      </div>
      <Box className="home-window" sx={{ backdropFilter: "blur(5px)", width: "95%", margin: "0 auto", height: checkClosed, overflow: "scroll" }}>
        <AppBar position="sticky">
          <Tabs
            sx={{
              backgroundColor: "black",
              "& .MuiTabs-indicator": {
                borderBottom: "2px solid red",
              },
            }}
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            aria-label="Foodlux tabs"
            textColor="inherit"
            variant="fullWidth"
          >
            <Tab
              icon={<h1>🍔</h1>}
              aria-label="fflogo"
              label="FAST FOOD"
              {...allyProps(0)}
            />
            <Tab
              icon={<h1>🍜</h1>}
              aria-label="fdlogo"
              label="FINE DINING"
              {...allyProps(1)}
            />
            <Tab
              icon={<h1>🍿</h1>}
              aria-label="snlogo"
              label="SNACKS"
              {...allyProps(2)}
            />
            <Tab
              icon={<h1>🍷</h1>}
              aria-label="alclogo"
              label="ALCOHOL"
              {...allyProps(3)}
            />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            {fastfood?.map((val: { title: any; menu: any; }, idx: React.Key | null | undefined) => {
              return (
                <Homeitems
                  key={idx}
                  title={val.title}
                  menu={val.menu}
                  addtocart={addCart}
                  searchinfo={infoFromSearch}
                  render={render}
                  setrender={setRender}
                />
              );
            })}
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            {finedine?.map((val: { title: any; menu: any; }, idx: React.Key | null | undefined) => {
              return (
                <Homeitems
                  key={idx}
                  title={val.title}
                  menu={val.menu}
                  addtocart={addCart}
                  searchinfo={infoFromSearch}
                  render={render}
                  setrender={setRender}
                />
              );
            })}
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            {snacks?.map((val: { title: any; menu: any; }, idx: React.Key | null | undefined) => {
              return (
                <Homeitems
                  key={idx}
                  title={val.title}
                  menu={val.menu}
                  addtocart={addCart}
                  searchinfo={infoFromSearch}
                  render={render}
                  setrender={setRender}
                />
              );
            })}
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            {alcohol?.map((val: { title: any; menu: any; }, idx: React.Key | null | undefined) => {
              return (
                <Homeitems
                  key={idx}
                  title={val.title}
                  menu={val.menu}
                  addtocart={addCart}
                  searchinfo={infoFromSearch}
                  render={render}
                  setrender={setRender}
                />
              );
            })}
          </TabPanel>
        </SwipeableViews>
      </Box>
      <Button
        variant="contained"
        size="medium"
        sx={{
          margin: "10px 0",
          backgroundColor: "red",
          "&:hover": {
            backgroundColor: "rgb(162, 6, 6)",
          }
        }}
        onClick={handleLogout}
        endIcon={<LogoutIcon />}>
        Logout
      </Button>
      <Outlet />
    </div>
  );
};

export default Home;

