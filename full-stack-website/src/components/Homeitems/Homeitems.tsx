import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "../../stylesheets/Homeitems.css";

const Homeitems = ({ menu, title, addtocart, searchinfo, render, setrender }) => {
  // changes the background color of item to red depending on if the item is found or not
  const [found, setFound] = useState("rgba(255, 0, 0, 0.547)");

  const renderChange = () => {
    setrender(!render);
  };

  // checks if the search info (item) input into search matches any of the current items listed.. if it does make it red and if not return and empty string
  const searchItemIdentified = (item: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined) => {
    if (searchinfo.itemFromSearch === item) {
      setTimeout(() => {
        setFound('')
      }, 5000)
      return found
    } else {
      return ""
    }
  }

  useEffect(() => {
    // if company that was apart of search matches the current titles listed open it.. once new search information is input run function again
    const compareSearchInfo = () => {
      return searchinfo.companyFromSearch === title ? setrender(true) : null
    }
    compareSearchInfo()
  }, [searchinfo, setrender, title])

  return (
    <div className="ff-wrapper" data-testid='Homeitems'>
      <div className="ff-grid a">
        <Button
          sx={{
            marginBottom: "5px", marginRight: "5px", backgroundColor: "red", "&:hover": {
              backgroundColor: "rgb(162, 6, 6)",
            }
          }}
          variant="contained"
          className="button active"
          onClick={renderChange}
        >
          {title}
        </Button>
      </div>
      {!render ? (
        <div className="ff-grid b"></div>
      ) : (
        <Box
          sx={{
            backdropFilter: "blur(5px)",
            flexGrow: 1,
            padding: "5px",
            color: "white",
          }}
        >
          <p className="menu-titles">Food</p>
          <Grid
            className="b"
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 2, md: 12 }}>
            {menu?.map((items: { type: string; image: string | undefined; item: {} | null | undefined; desc: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; price: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }, idx: React.Key) =>
              items.type === "food" ?
                (<div className="home-item-group" key={idx}>
                  <Grid item xs={4} className="home-items">
                    <img alt="" src={items.image} className="item-image" />
                  </Grid>
                  <Grid item xs={6} className="home-items-desc">
                    <li style={{ backgroundColor: searchItemIdentified(items.item) }}><b><i>{items.item}</i></b></li>
                    <li>{items.desc}</li>
                  </Grid>
                  <Grid item xs={1} className="home-items">
                    <li>&#36;{items.price}</li>
                  </Grid>
                  <Grid item xs={1} className="home-items">
                    <Button
                      onClick={() => addtocart(menu[idx], idx)}
                      sx={{
                        color: "white", backgroundColor: "red", "&:hover": {
                          backgroundColor: "rgb(162, 6, 6)",
                        }
                      }}
                      size="large"
                      data-testid={`addcart-test-${idx}`}
                    >
                      Add
                    </Button>
                  </Grid>
                </div>) : ""
            )}
          </Grid>
          <br></br>
          <p className="menu-titles">Drinks</p>
          <Grid
            className="b"
            container
            spacing={{ xs: 0, md: 3 }}
            columns={{ xs: 2, sm: 2, md: 12 }}>
            {menu?.map((items: { type: string; image: string | undefined; item: {} | null | undefined; desc: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; price: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }, idx: React.Key) => {
              return (
                items.type === "drink" ?
                  (<div className="home-item-group" key={idx}>
                    <Grid item xs={4} className="home-items">
                      <img alt="" src={items.image} className="item-image" />
                    </Grid>
                    <Grid item xs={6} className="home-items-desc">
                      <li style={{ backgroundColor: searchItemIdentified(items.item) }}><b><i>{items.item}</i></b></li>
                      <li>{items.desc}</li>
                    </Grid>
                    <Grid item xs={1} className="home-items">
                      <li>&#36;{items.price}</li>
                    </Grid>
                    <Grid item xs={1} className="home-items">
                      <Button
                        onClick={() => addtocart(menu[idx], idx)}
                        sx={{
                          color: "white", backgroundColor: "red", "&:hover": {
                            backgroundColor: "rgb(162, 6, 6)",
                          }
                        }}
                        size="large"
                      >
                        Add
                      </Button>
                    </Grid>
                  </div>) : ""
              )
            })}
          </Grid>
        </Box>
      )}
    </div>
  );
};

export default Homeitems;
