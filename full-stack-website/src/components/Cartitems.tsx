import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import "../stylesheets/Cartitems.css";

const Cartitems = ({ items, amount }) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <Grid
        container
        spacing={3}
        sx={{
          width: "80%",
          backgroundColor: "whitesmoke",
          margin: "0 auto",
          padding: "20px 0 20px 0",
          listStyleType: "none",
        }}
      >
        {items.map((item: { image: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; price: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; item: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; desc: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }, idx: React.Key | null | undefined) => {
          return (
            <div className="cart-container" key={idx}>
              <Grid item xs={6} className="cart-items">
                <Item>
                  <div>
                    <li>{item.image}</li>
                  </div>
                </Item>
              </Grid>
              <Grid item xs={3} className="cart-items">
                <Item>
                  <div>
                    <li>{item.price}</li>
                  </div>
                </Item>
              </Grid>
              <Grid item xs={1} className="cart-items">
                <Item
                  sx={{
                    color: "red",
                    fontSize: "1.5em",
                    padding: "0 5px",
                  }}
                >
                  -
                </Item>
              </Grid>
              <Grid item xs={1} className="cart-items">
                <Item
                  sx={{
                    color: "black",
                    fontSize: "1.1em",
                    padding: "5px 5px",
                  }}
                >
                  {amount}
                </Item>
              </Grid>
              <Grid item xs={1} className="cart-items">
                <Item
                  sx={{
                    color: "dodgerblue",
                    fontSize: "1.5em",
                    padding: "0 5px",
                  }}
                >
                  +
                </Item>
              </Grid>
              <Grid item xs={4} className="cart-items">
                <Item>
                  <div>
                    <li>{item.item}</li>
                  </div>
                </Item>
              </Grid>
              <Grid item xs={7} className="cart-items">
                <Item>
                  <div>
                    <li>{item.desc}</li>
                  </div>
                </Item>
              </Grid>
            </div>
          );
        })}
      </Grid>
    </>
  );
};

export default Cartitems;
