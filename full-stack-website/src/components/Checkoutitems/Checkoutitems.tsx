import React from 'react'
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';
import { styled } from "@mui/material/styles";
import "../../stylesheets/Checkoutitems.css"

const Checkoutitems = ({ details }) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div data-testid="Checkoutitems">
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 2, md: 12, lg: 12 }}
      >
        {details?.map((detail: { image: string | undefined, item: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; price: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; quantity: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }, idx: React.Key | null | undefined) => {
          return (
            <div className="checkout-container" key={idx}>
              <Grid item xs={5} className="checkout-items">
                <Item>
                  <div>
                    <LazyLoadImage alt="" src={detail.image} PlaceholderSrc={detail.image} effect="blur" className="detail-image" data-testid={`image-test-${idx}`} />
                  </div>
                </Item>
              </Grid>
              <Grid item container sm xs={12}>
                <Grid item xs={12} className="checkout-items">
                  <Item>
                    <div>
                      <li data-testid={`item-test-${idx}`}>{detail.item}</li>
                    </div>
                  </Item>
                </Grid>
                <Grid item xs={6} className="checkout-items">
                  <Item>
                    <div>
                      <li data-testid={`price-test-${idx}`}>&#36;{detail.price}</li>
                    </div>
                  </Item>
                </Grid>
                <Grid item xs={6} className="checkout-items">
                  <Item>
                    <div>
                      <li data-testid={`quantity-test-${idx}`}>QTY: {detail.quantity}</li>
                    </div>
                  </Item>
                </Grid>
              </Grid>
            </div>
          )
        })}
      </Grid>
    </div>
  )
}

export default Checkoutitems