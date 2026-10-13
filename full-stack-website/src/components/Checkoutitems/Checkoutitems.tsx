import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Checkoutitems = ({ details }: { details: { image: string; item: string; price: number; quantity: number; }[] }) => {
  return (
    <div data-testid="Checkoutitems">
      {details?.map((detail: { image: string; item: string; price: number; quantity: number; }, idx: number) => {
        return (
          <Card className="checkout-container" key={idx} sx={{ mb: 2, width: "100%" }}>
            <Stack direction="row" spacing={2} alignItems="center" sx={{ p: 1 }}>
              <Box className="checkout-items">
              </Box>
              <CardContent sx={{ flexGrow: 1, textAlign: "left", py: 1 }}>
                <Typography data-testid={`item-test-${idx}`}>{detail.item}</Typography>
                <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
                  <Typography data-testid={`price-test-${idx}`}>${detail.price}</Typography>
                  <Typography data-testid={`quantity-test-${idx}`}>QTY: {detail.quantity}</Typography>
                </Stack>
              </CardContent>
            </Stack>
          </Card>
        )
      })}
    </div>
  )
}

export default Checkoutitems
