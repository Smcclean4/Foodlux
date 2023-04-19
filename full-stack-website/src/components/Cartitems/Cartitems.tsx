import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { styled } from "@mui/material/styles";
import "../../stylesheets/Cartitems.css";

const Cartitems = ({ items, additem, removeitem }) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div data-testid="Cartitems">
      {items?.map((item: { image: string | undefined, price: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; quantity: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; item: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; desc: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }, idx: React.Key) => {
        return (
          <div className="cart-container" key={idx}>
            <Grid
              container
              spacing={3}
            >
              <Grid item xs={4} container spacing={2} columns={{ xs: 1, sm: 1, md: 1, lg: 12 }} >
                <Grid item xs={12}>
                  <Item>
                    <div className="cart-items">
                      <li data-testid="cart-items-test">{item.item}</li>
                    </div>
                  </Item>
                </Grid>
                <Grid item xs={12}>
                  <Item>
                    <div className="cart-items">
                      <img alt="" src={item.image} className="item-images" data-testid="cart-image-test" />
                    </div>
                  </Item>
                </Grid>
              </Grid>
              <Grid item xs={8} container spacing={2} columns={{ xs: 6, sm: 6, md: 6, lg: 12 }} >
                <Grid item xs={6}>
                  <Item>
                    <div className="cart-items">
                      <li data-testid="cart-price-test">&#36;{item.price}</li>
                    </div>
                  </Item>
                </Grid>
                <Grid item xs={2}>
                  <Item
                    onClick={() => removeitem(idx)}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      color: "red",
                      padding: "8px",
                      '&:hover': {
                        cursor: "pointer",
                        backgroundColor: "whitesmoke",
                      }, cursor: "pointer"
                    }}
                  >
                    {item.quantity === 1 ? <DeleteForeverIcon fontSize="medium" /> : <RemoveIcon />}
                  </Item>
                </Grid>
                <Grid item xs={2}>
                  <Item
                    sx={{
                      color: "black",
                      fontSize: "1.3em",
                      padding: "5px 5px",
                    }}
                  >
                    <span data-testid="cart-quantity-test">{item.quantity}</span>
                  </Item>
                </Grid>
                <Grid item xs={2}>
                  <Item
                    onClick={() => additem(idx)}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      color: "dodgerblue",
                      padding: "8px",
                      '&:hover': {
                        cursor: "pointer",
                        backgroundColor: "whitesmoke",
                      }, cursor: "pointer"
                    }}
                  >
                    <AddIcon fontSize="medium" />
                  </Item>
                </Grid>
                <Grid item xs={12} >
                  <Item>
                    <div className="cart-items-desc">
                      <li data-testid="cart-desc-test">{item.desc}</li>
                    </div>
                  </Item>
                </Grid>
              </Grid>
            </Grid>
          </div>
        );
      })}
    </div>
  );
};

export default Cartitems;
