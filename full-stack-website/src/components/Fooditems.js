import React, { useState, useEffect } from "react";
import "../stylesheets/Fooditems.css";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const Fooditems = ({ menu, title, addtocart, type }) => {
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
                  {menu?.map((images, idx) => {
                    return images.type === "food" ? (
                      <div key={idx}>
                        <img alt="" src={images.image} />
                      </div>
                    ) : (
                      ""
                    );
                  })}
                </Grid>
                <Grid item xs={4}>
                  {menu?.map((food, idx) => {
                    return food.type === "food" ? (
                      <div key={idx}>
                        <li>{food.item}</li>
                      </div>
                    ) : (
                      ""
                    );
                  })}
                </Grid>
                <Grid item xs={2}>
                  {menu?.map((prices, idx) => {
                    return prices.type === "food" ? (
                      <div key={idx}>
                        <li>{prices.price}</li>
                      </div>
                    ) : (
                      ""
                    );
                  })}
                </Grid>
                <Grid item xs={2}>
                  {menu?.map((_, idx) => {
                    return _.type === "food" ? (
                      <span className="btn-styling" key={idx}>
                        <Button
                          onClick={() => addtocart()}
                          sx={{ color: "dodgerblue" }}
                          size="small"
                        >
                          Add
                        </Button>
                      </span>
                    ) : (
                      ""
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
                  {menu?.map((images, idx) => {
                    return images.type === "drink" ? (
                      <div key={idx}>
                        <img alt="" src={images.image} />
                      </div>
                    ) : (
                      ""
                    );
                  })}
                </Grid>
                <Grid item xs={4}>
                  {menu?.map((drink, idx) => {
                    return drink.type === "drink" ? (
                      <div key={idx}>
                        <li>{drink.item}</li>
                      </div>
                    ) : (
                      ""
                    );
                  })}
                </Grid>
                <Grid item xs={2}>
                  {menu?.map((prices, idx) => {
                    return prices.type === "drink" ? (
                      <div key={idx}>
                        <li>{prices.price}</li>
                      </div>
                    ) : (
                      ""
                    );
                  })}
                </Grid>
                <Grid item xs={2}>
                  {menu?.map((_, idx) => {
                    return _.type === "drink" ? (
                      <span className="btn-styling" key={idx}>
                        <Button
                          onClick={() => addtocart()}
                          sx={{ color: "dodgerblue" }}
                          size="small"
                        >
                          Add
                        </Button>
                      </span>
                    ) : (
                      ""
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
