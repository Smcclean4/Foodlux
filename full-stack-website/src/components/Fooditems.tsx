import React, { useEffect, useState, useRef } from "react";
import "../stylesheets/Fooditems.css";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const Fooditems = ({ menu, title, addtocart }) => {
  // checking whether active is on or off based on true or false
  const [render, setRender] = useState(false);
  // previously used useEffect to combat opening 2 at once??
  let statusRef: any = useRef();

  useEffect(() => {
    let status = document.querySelector(".button");
    statusRef.current = status
  });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    statusRef.current.classList.toggle("active", render === true);
    statusRef.current.classList.contains("active") ? setRender(false) : setRender(true);
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
                sx={{ backgroundColor: "whitesmoke" }}
                className="b"
                container
                spacing={0}
              >
                <Grid item xs={4}>
                  {menu?.map((images: { type: string; image: string | undefined; }, idx: React.Key | null | undefined) => {
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
                  {menu?.map((food: { type: string; item: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }, idx: React.Key | null | undefined) => {
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
                  {menu?.map((prices: { type: string; price: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }, idx: React.Key | null | undefined) => {
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
                  {menu?.map((_: { type: string; }, idx: React.Key | "") => {
                    return _.type === "food" ? (
                      <span className="btn-styling" key={idx}>
                        <Button
                          onClick={() => addtocart(menu[idx])}
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
                sx={{ backgroundColor: "whitesmoke" }}
                className="b"
                container
                spacing={0}
              >
                <Grid item xs={4}>
                  {menu?.map((images: { type: string; image: string | undefined; }, idx: React.Key | null | undefined) => {
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
                  {menu?.map((drink: { type: string; item: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }, idx: React.Key | null | undefined) => {
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
                  {menu?.map((prices: { type: string; price: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }, idx: React.Key | null | undefined) => {
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
                  {menu?.map((_: { type: string; }, idx: React.Key | "") => {
                    return _.type === "drink" ? (
                      <span className="btn-styling" key={idx}>
                        <Button
                          onClick={() => addtocart(menu[idx])}
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
