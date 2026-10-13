import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import "../../stylesheets/Cartitems.css";

const Cartitems = ({ items, additem, removeitem }) => {
  return (
    <div data-testid="Cartitems">
      {items?.map((item: { image: string; price: number; quantity: number; item: string; desc: string; }, idx: number) => {
        return (
          <Card className="cart-container" key={idx} sx={{ width: "100%", maxWidth: 960, mx: "auto", mb: 2, p: 1 }}>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} alignItems={{ sm: "center" }}>
              <Box className="cart-items" sx={{ minWidth: 160 }}>
                <LazyLoadImage alt={item.item} src={item.image} PlaceholderSrc={item.image} effect="blur" className="item-images" data-testid="cart-image-test" />
              </Box>
              <CardContent sx={{ flexGrow: 1, textAlign: "left" }}>
                <Typography variant="h6" data-testid="cart-items-test">{item.item}</Typography>
                <Typography className="cart-items-desc" data-testid="cart-desc-test" sx={{ mt: 1 }} color="text.secondary">
                  {item.desc}
                </Typography>
                <Typography variant="subtitle1" data-testid="cart-price-test" sx={{ mt: 1, fontWeight: 700 }}>
                  ${item.price}
                </Typography>
              </CardContent>
              <Stack direction="row" alignItems="center" justifyContent="center" spacing={1} sx={{ px: 2, pb: { xs: 2, sm: 0 } }}>
                <IconButton color="primary" onClick={() => removeitem(idx)} aria-label="Remove item">
                  {item.quantity === 1 ? <DeleteForeverIcon /> : <RemoveIcon />}
                </IconButton>
                <Typography variant="h6" data-testid="cart-quantity-test">{item.quantity}</Typography>
                <IconButton color="primary" onClick={() => additem(idx)} aria-label="Add item">
                  <AddIcon />
                </IconButton>
              </Stack>
            </Stack>
          </Card>
        );
      })}
    </div>
  );
};

export default Cartitems;
