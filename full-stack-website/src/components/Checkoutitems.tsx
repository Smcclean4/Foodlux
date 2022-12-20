import React from 'react'
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import "../stylesheets/Checkoutitems.css"

const Checkoutitems = ({ details }) => {
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
      >
        {details?.map((detail: { image: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; item: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; price: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; quantity: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }, idx: React.Key | null | undefined) => {
          return (
            <div className="checkout-container" key={idx}>
              <Grid item className="checkout-items">
                <Item>
                  <div>
                    <li>{detail.item}</li>
                  </div>
                </Item>
              </Grid>
              <Grid item xs={5} className="checkout-items">
                <Item>
                  <div>
                    <li>{detail.image}</li>
                  </div>
                </Item>
              </Grid>
              <Grid item xs={4} className="checkout-items">
                <Item>
                  <div>
                    <li>{detail.price}</li>
                  </div>
                </Item>
              </Grid>
              <Grid item xs={3} className="checkout-items">
                <Item>
                  <div>
                    <li>{detail.quantity}</li>
                  </div>
                </Item>
              </Grid>
            </div>
          )
        })}
      </Grid>
    </>
  )
}

export default Checkoutitems