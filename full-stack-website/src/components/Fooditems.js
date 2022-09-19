import React, { useState, useEffect } from "react";
import "../stylesheets/Fooditems.css";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const Fooditems = ({ menu, title, addtocart }) => {
  // checking whether active is on or off based on true or false
  const [render, setRender] = useState(false);
  let status;

  useEffect(() => {
    status = document.querySelector(".button");
  });

  const handleClick = (e) => {
    e.preventDefault();
    status.classList.toggle("active", render === true);
    status.classList.contains("active") ? setRender(false) : setRender(true);
  };

  console.log(menu);

  return (
    <>
      <div className="ff-wrapper">
        <div className="ff-grid a">
          <Button
            sx={{ marginBottom: "5px", backgroundColor: "dodgerblue" }}
            variant="contained"
            className="button active"
            onClick={(e) => handleClick(e)}
          >
            {title}
          </Button>
        </div>
        {/* when tab is closed display no data and when it is open show information */}
        {!render ? (
          <div className="ff-grid b"></div>
        ) : (
          <>
            <Box
              sx={{
                backgroundColor: "whitesmoke",
                flexGrow: 1,
                padding: "5px",
              }}
            >
              <h2>Food</h2>
              <Grid
                sx={{ backgroundColor: "grey" }}
                className="b"
                container
                spacing={0}
              >
                <Grid item xs={4}>
                  {menu?.map((items, idx) => {
                    return (
                      <div id={idx}>
                        <img alt="" src={items.image} />
                      </div>
                    );
                  })}
                </Grid>
                <Grid item xs={4}>
                  {/* figure out a solution to display items */}
                  {menu?.map((items, idx) => {
                    return (
                      <div key={idx}>
                        <li>{items.item}</li>
                      </div>
                    );
                  })}
                </Grid>
                <Grid item xs={2}>
                  {menu?.map((price, idx) => {
                    return (
                      <div key={idx}>
                        <li>{price.price}</li>
                      </div>
                    );
                  })}
                </Grid>
                <Grid item xs={2}>
                  {Array.from(Array(menu.length)).map((_, idx) => {
                    return (
                      <span className="btn-styling" key={idx}>
                        <Button
                          onClick={() => addtocart()}
                          sx={{ color: "dodgerblue" }}
                          size="small"
                        >
                          Add
                        </Button>
                      </span>
                    );
                  })}
                </Grid>
              </Grid>
              <br></br>
              <h2>Drinks</h2>
              <Grid
                sx={{ backgroundColor: "grey" }}
                className="b"
                container
                spacing={0}
              >
                <Grid item xs={4}>
                  {menu?.map((items, idx) => {
                    return (
                      <div key={idx}>
                        <img alt="" src={items.image} />
                      </div>
                    );
                  })}
                </Grid>
                <Grid item xs={4}>
                  {menu?.map((items, idx) => {
                    return (
                      <div key={idx}>
                        <li>{items.item}</li>
                      </div>
                    );
                  })}
                </Grid>
                <Grid item xs={2}>
                  {menu?.map((price, idx) => {
                    return (
                      <div key={idx}>
                        <li>{price.price}</li>
                      </div>
                    );
                  })}
                </Grid>
                <Grid item xs={2}>
                  {Array.from(Array(menu.length)).map((_, idx) => {
                    return (
                      <span className="btn-styling" key={idx}>
                        <Button
                          onClick={() => addtocart()}
                          sx={{ color: "dodgerblue" }}
                          size="small"
                        >
                          Add
                        </Button>
                      </span>
                    );
                  })}
                </Grid>
              </Grid>
            </Box>
          </>
        )}
      </div>
    </>
  );
};

export default Fooditems;
