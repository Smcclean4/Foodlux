import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Fooditems from "../components/Fooditems";
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
  // storing dummy values of food
  const [fastfood] = useState([
    {
      title: "Bob's Burgers",
      menu: [
        {
          item: "Bacon Burger",
          price: 4.25,
          desc: "Get the money and get it all the time",
          image: "money.jpg",
          quantity: 1,
          type: "food",
        },
        {
          item: "Chili Cheese Fries",
          price: 2.85,
          desc: "Get the money and get it all the time",
          image: "money.jpg",
          quantity: 1,
          type: "food",
        },
        {
          item: "Jalepenos",
          price: 3.25,
          desc: "Get the money and get it all the time",
          image: "money.jpg",
          quantity: 1,
          type: "food",
        },
        {
          item: "Coke",
          price: 5.25,
          desc: "Get the money and get it all the time",
          image: "money.jpg",
          quantity: 1,
          type: "drink",
        },
        {
          item: "Sprite",
          price: 1.25,
          desc: "Get the money and get it all the time",
          image: "money.jpg",
          quantity: 1,
          type: "drink",
        },
        {
          item: "Lemonade",
          price: 1.25,
          desc: "Get the money and get it all the time",
          image: "money.jpg",
          quantity: 1,
          type: "drink",
        },
      ],
    },
  ]);

  const [snacks] = useState([
    {
      title: "8-11",
      menu: [
        {
          item: "Hot Cat",
          price: 9.25,
          desc: "Get the money and get it all the time",
          image: "money.jpg",
          quantity: 1,
          type: "food",
        },
        {
          item: "Wings and Tings",
          price: 7.55,
          desc: "Get the money and get it all the time",
          image: "money.jpg",
          quantity: 1,
          type: "food",
        },
        {
          item: "Smetzels",
          price: 2.15,
          desc: "Get the money and get it all the time",
          image: "money.jpg",
          quantity: 1,
          type: "food",
        },
        {
          item: "Water",
          price: 1.25,
          desc: "Get the money and get it all the time",
          image: "money.jpg",
          quantity: 1,
          type: "drink",
        },
        {
          item: "Gatorade",
          price: 1.25,
          desc: "Get the money and get it all the time",
          image: "money.jpg",
          quantity: 1,
          type: "drink",
        },
        {
          item: "Sprite",
          price: 1.25,
          desc: "Get the money and get it all the time",
          image: "money.jpg",
          quantity: 1,
          type: "drink",
        },
      ],
    },
  ]);

  const [finedine] = useState([
    {
      title: "Puth's Chriss",
      menu: [
        {
          item: "Ramen",
          price: 8.95,
          desc: "Get the money and get it all the time",
          image: "money.jpg",
          quantity: 1,
          type: "food",
        },
        {
          item: "Wonton Sushi",
          price: 3.75,
          desc: "Get the money and get it all the time",
          image: "money.jpg",
          quantity: 1,
          type: "food",
        },
        {
          item: "Steak and Eggs",
          price: 10.45,
          desc: "Get the money and get it all the time",
          image: "money.jpg",
          quantity: 1,
          type: "food",
        },
        {
          item: "Champagne",
          price: 1.25,
          desc: "Get the money and get it all the time",
          image: "money.jpg",
          quantity: 1,
          type: "drink",
        },
        {
          item: "Water",
          price: 1.25,
          desc: "Get the money and get it all the time",
          image: "money.jpg",
          quantity: 1,
          type: "drink",
        },
        {
          item: "Strawberry Lemonade",
          price: 1.25,
          desc: "Get the money and get it all the time",
          image: "money.jpg",
          quantity: 1,
          type: "drink",
        },
      ],
    },
  ]);

  const [alcohol] = useState([
    {
      title: "Johnny's Liqour",
      menu: [
        {
          item: "Crackers",
          price: 1.15,
          desc: "Get the money and get it all the time",
          image: "money.jpg",
          quantity: 1,
          type: "food",
        },
        {
          item: "Salami",
          price: 1.05,
          desc: "Get the money and get it all the time",
          image: "money.jpg",
          quantity: 1,
          type: "food",
        },
        {
          item: "Wine",
          price: 1.25,
          desc: "Get the money and get it all the time",
          image: "money.jpg",
          quantity: 1,
          type: "drink",
        },
        {
          item: "Titos Vodka",
          price: 1.25,
          desc: "Get the money and get it all the time",
          image: "money.jpg",
          quantity: 1,
          type: "drink",
        },
        {
          item: "Hennessey",
          price: 1.25,
          desc: "Get the money and get it all the time",
          image: "money.jpg",
          quantity: 1,
          type: "drink",
        },
      ],
    },
  ]);

  // getting cart from local storage
  const cartFromHomeLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

  // store items into cart
  const [cart, setCart] = useState(cartFromHomeLocalStorage);

  // MUI
  const [value, setValue] = useState(0);
  const theme = useTheme();

  const handleChangeIndex = (index: React.SetStateAction<number>) => {
    setValue(index);
  };

  const handleChange = (event: any, newValue: React.SetStateAction<number>) => {
    setValue(newValue);
  };

  // example username
  let username = "Carolina";

  const addCart = (food: any) => {
    // set cart data
    setCart([...cart, food]);
  };

  const getCartTotal = () => {
    return cart.reduce((sum: number) => sum + 1, 0);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="home-background">
      <p className="home-logo">Foodlux</p>
      {/* will be replaced with actual user */}
      <div className="dynamic-cart-username">
        <h1 className="username">Hi, {`${username}`}!</h1>
        <div>
          <Link to="/Cart" state={{ data: cart }}>
            <ShoppingCartIcon className="cart" />
          </Link>
          {/* display cart count */}
          <p className="cart-count">{getCartTotal()}</p>
        </div>
      </div>
      <Box sx={{ bgcolor: "background.paper", width: "90%", margin: "0 auto" }}>
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
            {fastfood.map((val, idx) => {
              return (
                <Fooditems
                  key={idx}
                  title={val.title}
                  menu={val.menu}
                  addtocart={addCart}
                />
              );
            })}
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            {finedine.map((val, idx) => {
              return (
                <Fooditems
                  key={idx}
                  title={val.title}
                  menu={val.menu}
                  addtocart={addCart}
                />
              );
            })}
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            {snacks.map((val, idx) => {
              return (
                <Fooditems
                  key={idx}
                  title={val.title}
                  menu={val.menu}
                  addtocart={addCart}
                />
              );
            })}
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            {alcohol.map((val, idx) => {
              return (
                <Fooditems
                  key={idx}
                  title={val.title}
                  menu={val.menu}
                  addtocart={addCart}
                />
              );
            })}
          </TabPanel>
        </SwipeableViews>
      </Box>
      <Outlet />
    </div>
  );
};

export default Home;
