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

function TabPanel(props) {
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

function allyProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

// getting cart from local storage
const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

const Home = () => {
  // storing dummy values of food
  const [fastfood] = useState(
    [
      {
        title: "Bob's Burgers",
        menu: [
          {
            item: "Bacon Burger",
            price: "$1.25",
            desc: "Get the money and get it all the time",
            image: "money.jpg",
            type: "food",
          },
          {
            item: "Chili Cheese Fries",
            price: "$1.25",
            desc: "Get the money and get it all the time",
            image: "money.jpg",
            type: "food",
          },
          {
            item: "Jalepenos",
            price: "$1.25",
            desc: "Get the money and get it all the time",
            image: "money.jpg",
            type: "food",
          },
          {
            item: "Coke",
            price: "$1.25",
            desc: "Get the money and get it all the time",
            image: "money.jpg",
            type: "drink",
          },
          {
            item: "Sprite",
            price: "$1.25",
            desc: "Get the money and get it all the time",
            image: "money.jpg",
            type: "drink",
          },
          {
            item: "Lemonade",
            price: "$1.25",
            desc: "Get the money and get it all the time",
            image: "money.jpg",
            type: "drink",
          },
        ],
      },
    ]
    // data: {
    //   name: "Bob's Burgers",
    //   drinks: ["Coke", "Sprite", "Lemonade"],
    //   prices: [
    //     ["$1.25", "$1.25", "$1.25"],
    //     ["$1.25", "$1.25", "$1.25"],
    //   ],
    //   food: ["Bacon Burgers ", "Chili Cheese Fries ", "Jalepenos "],
    //   images: ["money.jpg", "money.jpg", "money.jpg"],
    //   desc: [
    //     "get the money and get it all the time",
    //     "get the money and get it all the time",
    //     "get the money and get it all the time",
    //   ],
    // },
  );

  const [snacks] = useState({
    data: {
      name: "8-11",
      food: ["Hotcat ", "Wings and Tings ", "Smetzels "],
      prices: [
        ["$1.25", "$1.25", "$1.25"],
        ["$1.25", "$1.25", "$1.25"],
      ],
      drinks: ["Water ", "Gatorade ", "Sprite "],
      images: ["money.jpg", "money.jpg", "money.jpg"],
      desc: [
        "get the money and get it all the time",
        "get the money and get it all the time",
        "get the money and get it all the time",
      ],
    },
  });

  const [finedine] = useState({
    data: {
      name: "Puth's Chriss",
      food: ["Ramen", "Wonton Sushi ", "Steak and Eggs "],
      prices: [
        ["$1.25", "$1.25", "$1.25"],
        ["$1.25", "$1.25", "$1.25"],
      ],
      drinks: ["Chapagne ", "Water ", "Strawberry Lemonade "],
      images: ["money.jpg", "money.jpg", "money.jpg"],
      desc: [
        "get the money and get it all the time",
        "get the money and get it all the time",
        "get the money and get it all the time",
      ],
    },
  });

  const [alcohol] = useState({
    data: {
      name: "Johnny's Liqour",
      food: ["Crackers", "Salami"],
      prices: [
        ["$1.25", "$1.25"],
        ["$1.25", "$1.25", "$1.25"],
      ],
      drinks: ["Wine ", "Titos Vodka ", "Hennessy "],
      images: ["money.jpg", "money.jpg", "money.jpg"],
      desc: [
        "get the money and get it all the time",
        "get the money and get it all the time",
        "get the money and get it all the time",
      ],
    },
  });

  // store items into cart
  const [cart, setCart] = useState(cartFromLocalStorage);

  // MUI
  const [value, setValue] = useState(0);
  const theme = useTheme();

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // example username
  let username = "Carolina";

  // handle shopping cart number
  const addCart = (food) => {
    // set cart data
    setCart([...cart, food]);
    console.log(cart);
  };

  // const removeCart = (itemToRemove) => {
  //   setCart(cart.filter((food) => food !== itemToRemove));
  // };

  const getCartTotal = () => {
    return cart.reduce((sum) => sum + 1, 0);
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
                  addtocart={() => addCart(val)}
                />
              );
            })}
            {/* // <Fooditems
                //   key={idx}
                //   title={val.name}
                //   food={val.food}
                //   drinks={val.drinks}
                //   prices={val.prices}
                //   desc={val.desc}
                //   img={val.images}
                //   addtocart={() => addCart(val)}
                // /> */}
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            {Object.values(finedine).map((val, idx) => {
              return (
                <Fooditems
                  key={idx}
                  title={val.name}
                  food={val.food}
                  drinks={val.drinks}
                  prices={val.prices}
                  desc={val.desc}
                  img={val.images}
                  addtocart={() => addCart(val)}
                />
              );
            })}
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            {Object.values(snacks).map((val, idx) => {
              return (
                <Fooditems
                  key={idx}
                  title={val.name}
                  food={val.food}
                  drinks={val.drinks}
                  prices={val.prices}
                  desc={val.desc}
                  img={val.images}
                  addtocart={() => addCart(val)}
                />
              );
            })}
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            {Object.values(alcohol).map((val, idx) => {
              return (
                <Fooditems
                  key={idx}
                  title={val.name}
                  food={val.food}
                  drinks={val.drinks}
                  prices={val.prices}
                  desc={val.desc}
                  img={val.images}
                  addtocart={() => addCart(val)}
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
