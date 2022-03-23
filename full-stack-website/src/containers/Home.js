import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import Fooditems from '../components/Fooditems';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import '../stylesheets/Home.css'

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
                    <Typography component={'span'}>{children}</Typography>
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
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const Home = () => {
    // get businesses from database and set them into their section
    // also get menu items from the specified place with with the database
    const [fastfood, setFastfood] = useState({
        logo: "🍔",
        0: {
            name: "Bob's Burgers",
            drinks: ["Coke ", "Sprite ", "Lemonade "],
            food: ["Bacon Burgers ", "Chili Cheese Fries ", "Jalepenos "]
        },
        1: {
            name: "Ron's Burgers",
            drinks: ["Dr Pepper", "Water", "Fanta"],
            food: ["Pastrami Sandwich", "Cheese Whiz Nachos", "One in a Million Burger"],
        }
    })
    const [snacks, setSnacks] = useState({
        logo: "🍿",
        0: {
            name: "8-11",
            food: ["Hotcat ", "Wings and Tings ", "Smetzels "],
            drinks: ["Water ", "Gatorade ", "Sprite "]
        }
    })
    const [finedine, setFinedine] = useState({
        logo: "🍜",
        0: {
            name: "Puth's Chriss",
            food: ["Ramen ", "Wonton Sushi ", "Steak and Eggs "],
            drinks: ["Chapagne ", "Water ", "Strawberry Lemonade "]
        }
    })
    const [alcohol, setAlcohol] = useState({
        logo: "🍷",
        0: {
            name: "Johnny's Liqour",
            drinks: ["Wine ", "Titos Vodka ", "Hennessy "]
        }
    })

    // MUI
    const [value, setValue] = useState(0)
    const theme = useTheme();

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div className="home-background">
            <p className="home-logo">Foodlux</p>
            <Box sx={{ bgcolor: 'background.paper', width: "75%", margin: "0 auto" }}>
                <AppBar position="static">
                    <Tabs
                        sx={{
                            backgroundColor: "black",
                            "& .MuiTabs-indicator": {
                                borderBottom: "2px solid red"
                            }
                        }}
                        value={value}
                        onChange={handleChange}
                        indicatorColor="secondary"
                        aria-label="Foodlux tabs"
                        textColor="inherit"
                        variant="fullWidth"
                    >
                        <Tab icon={<h1>{fastfood.logo}</h1>} aria-label="fflogo" label="FAST FOOD" {...allyProps(0)} />
                        <Tab icon={<h1>{finedine.logo}</h1>} aria-label="fdlogo" label="FINE DINING" {...allyProps(1)} />
                        <Tab icon={<h1>{snacks.logo}</h1>} aria-label="snlogo" label="SNACKS" {...allyProps(2)} />
                        <Tab icon={<h1>{alcohol.logo}</h1>} aria-label="alclogo" label="ALCOHOL" {...allyProps(3)} />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    {/* looking to display list of companies and their sections from API */}
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        {Object.values(fastfood).map((val, idx) => {
                            return <Fooditems key={idx} title={val.name} food={val.food} drinks={val.drinks} />
                        })}
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        {Object.values(finedine).map((val, idx) => {
                            return <Fooditems key={idx} title={val.name} food={val.food} drinks={val.drinks} />
                        })}
                    </TabPanel>
                    <TabPanel value={value} index={2} dir={theme.direction}>
                        {Object.values(snacks).map((val, idx) => {
                            return <Fooditems key={idx} title={val.name} food={val.food} drinks={val.drinks} />
                        })}
                    </TabPanel>
                    <TabPanel value={value} index={3} dir={theme.direction}>
                        {Object.values(alcohol).map((val, idx) => {
                            return <Fooditems key={idx} title={val.name} food={val.food} drinks={val.drinks} />
                        })}
                    </TabPanel>
                </SwipeableViews>
            </Box>
            <Outlet />
        </div>
    )
}

export default Home
