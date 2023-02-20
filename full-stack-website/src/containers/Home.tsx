import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Homeitems from "../components/Homeitems";
import { CartModal } from "../modals/CartModal";
import { useModal } from "../hooks/useModal";
import { LoadingCircle } from "../tools/LoadingCircle"
import SearchBar from "../containers/SearchBar";
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
  );
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

  // getting cart from local storage
  const cartFromHomeLocalStorage: CartInfoInterface[] = JSON.parse(localStorage.getItem("cart") || "[]");

  // store items into cart
  const [cart, setCart] = useState<CartInfoInterface[]>(cartFromHomeLocalStorage);

  // loading state
  const [loading, setLoading] = useState(true)

  // cart modal hook
  const { isShowing, toggle } = useModal();

  // MUI
  const [value, setValue] = useState(0);
  const theme = useTheme();

  // all categories
  const { fastfood, finedine, snacks, alcohol }: any = Categories()
  const categories = [fastfood, finedine, snacks, alcohol]

  // all user data
  const { username }: any = UserData()

  // search item and company
  const [infoFromSearch, setItemsFromSearch] = useState({ itemFromSearch: '', companyFromSearch: '' })

  const handleChangeIndex = (index: React.SetStateAction<number>) => {
    setValue(index);
  };

  const handleChange = (event: any, newValue: React.SetStateAction<number>) => {
    setValue(newValue);
  };

  const addCart = (food: CartInfoInterface) => {
    setCart([...cart, food]);
  };

  const searchForItem = (searchTermItem: string, searchTermInfo: string) => {
    const { searchTermCompany, searchTermCategory }: any = searchTermInfo;
    searchTermCategory === 'fastfood' ? setValue(0) : searchTermCategory === 'finedine' ? setValue(1) : searchTermCategory === 'snacks' ? setValue(2) : searchTermCategory === 'alcohol' ? setValue(3) : setValue(0)
    setItemsFromSearch({ itemFromSearch: searchTermItem, companyFromSearch: searchTermCompany })
  }

  const getCartTotal = () => {
    return cart.reduce((sum: number) => sum + 1, 0);
  };

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('cart')
    window.location.reload()
    window.location.replace('/')
  }

  useEffect(() => {
    const loadData = async () => {
      await new Promise((p) => setTimeout(p, 1000));
      setLoading((loading) => !loading)
    }
    loadData();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    !loading ? (
      <div className="home-background">
        <p className="home-logo">Foodlux</p>
        {/* will be replaced with actual user */}
        <div className="dynamic-cart-username">
          <h1 className="username">Hi, {`${username}`}!</h1>
          <SearchBar data={categories} searchforitem={searchForItem} />
          <div>
            <button className="modal-button" onClick={toggle}>
              <ShoppingCartIcon className="cart" />
              <CartModal isShowing={isShowing} hide={toggle} state={cart} />
            </button>
            {/* display cart count */}
            <p className="cart-count">{getCartTotal()}</p>
          </div>
        </div>
        <Box sx={{ backdropFilter: "blur(5px)", width: "95%", margin: "0 auto" }}>
          <AppBar position="static">
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
                  />
                );
              })}
            </TabPanel>
          </SwipeableViews>
        </Box>
        <Button
          variant="contained"
          size="large"
          sx={{
            margin: "10px 0",
            backgroundColor: "red",
            "&:hover": {
              backgroundColor: "rgb(162, 6, 6)",
            }
          }}
          onClick={handleLogout}>
          Logout
        </Button>
        <Outlet />
      </div>
    ) : (
      <LoadingCircle />
    )
  );
};

export default Home;

