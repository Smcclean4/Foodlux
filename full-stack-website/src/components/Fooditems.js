import React, { useState, useEffect } from "react";
import "../stylesheets/Fooditems.css";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const Fooditems = (props) => {
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
            {props.title}
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
                <Grid item xs={2}>
                  {props.images?.map((items, idx) => {
                    return <img id={idx} src={items} />;
                  })}
                </Grid>
                <Grid item xs={4}>
                  {props.food?.map((items, idx) => {
                    return (
                      <div key={idx}>
                        <li>{items}</li>
                      </div>
                    );
                  })}
                </Grid>
                <Grid item xs={2}>
                  {props.prices[0]?.map((price, idx) => {
                    return (
                      <div key={idx}>
                        <li>{price}</li>
                      </div>
                    );
                  })}
                </Grid>
                <Grid item xs={2}>
                  {Array.from(Array(props.food?.length)).map((_, idx) => {
                    return (
                      <span className="btn-styling" key={idx}>
                        <Button
                          onClick={() => props.addtocart()}
                          sx={{ color: "dodgerblue" }}
                          size="small"
                        >
                          Add
                        </Button>
                      </span>
                    );
                  })}
                </Grid>
                <Grid item xs={2}>
                  {Array.from(Array(props.food?.length)).map((_, idx) => {
                    return (
                      <span className="btn-styling" key={idx}>
                        <Button
                          onClick={() => props.removefromcart()}
                          sx={{ color: "red" }}
                          size="small"
                        >
                          undo
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
                <Grid item xs={2}>
                  {props.images?.map((items, idx) => {
                    return <img alt="" id={idx} src={items} />;
                  })}
                </Grid>
                <Grid item xs={4}>
                  {props.drinks?.map((items, idx) => {
                    return (
                      <div key={idx}>
                        <li>{items}</li>
                      </div>
                    );
                  })}
                </Grid>
                <Grid item xs={2}>
                  {props.prices[1]?.map((price, idx) => {
                    return (
                      <div key={idx}>
                        <li>{price}</li>
                      </div>
                    );
                  })}
                </Grid>
                <Grid item xs={2}>
                  {Array.from(Array(props.drinks?.length)).map((_, idx) => {
                    return (
                      <span className="btn-styling" key={idx}>
                        <Button
                          onClick={() => props.addtocart()}
                          sx={{ color: "dodgerblue" }}
                          size="small"
                        >
                          Add
                        </Button>
                      </span>
                    );
                  })}
                </Grid>
                <Grid item xs={2}>
                  {Array.from(Array(props.drinks?.length)).map((_, idx) => {
                    return (
                      <span className="btn-styling" key={idx}>
                        <Button
                          onClick={() => props.removefromcart()}
                          sx={{ color: "red" }}
                          size="small"
                        >
                          undo
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
