import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { styled } from "@mui/material/styles";
import "../stylesheets/Cartitems.css";

const Cartitems = ({ items, additem, removeitem }) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      {items?.map((item: { image: string | undefined, price: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; quantity: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; item: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; desc: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }, idx: React.Key) => {
        return (
          <div className="cart-container" key={idx}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 2, sm: 2, md: 2, lg: 12 }}
            >
              <Grid item xs={4}>
                <Item>
                  <div className="cart-items">
                    <img alt="" src={item.image} className="item-images" />
                  </div>
                </Item>
              </Grid>
              <Grid item xs={12} sm container spacing={1}>
                <Grid item xs={5}>
                  <Item>
                    <div className="cart-items">
                      <li>{item.item}</li>
                    </div>
                  </Item>
                </Grid>
                <Grid item xs={3}>
                  <Item>
                    <div className="cart-items">
                      <li>&#36;{item.price}</li>
                    </div>
                  </Item>
                </Grid>
                <Grid item xs={1.5}>
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
                      }
                    }}
                  >
                    {item.quantity === 1 ? <DeleteForeverIcon fontSize="large" /> : <RemoveIcon />}
                  </Item>
                </Grid>
                <Grid item xs={1}>
                  <Item
                    sx={{
                      color: "black",
                      fontSize: "1.8em",
                      padding: "5px 5px",
                    }}
                  >
                    <span>{item.quantity}</span>
                  </Item>
                </Grid>
                <Grid item xs={1.5}>
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
                      }
                    }}
                  >
                    <AddIcon fontSize="large" />
                  </Item>
                </Grid>
                <Grid item xs={12}>
                  <Item>
                    <div className="cart-items-desc">
                      <li>{item.desc}</li>
                    </div>
                  </Item>
                </Grid>
              </Grid>
            </Grid>
          </div>
        );
      })}
    </>
  );
};

export default Cartitems;
