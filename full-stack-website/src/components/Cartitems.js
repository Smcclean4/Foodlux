import React from "react";
import Grid from "@mui/material/Grid";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Cartitems = (props) => {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <>
    {/* make sure that grid is adaptable */}
    {/* make plus and minus clickable and transfer data from added cart items to here */}
    {/* maybe incorporate redux? */}
      <Grid
        container
        spacing={3}
        sx={{
          width: "90%",
          backgroundColor: "whitesmoke",
          margin: "0 auto",
          padding: "20px 0 20px 0",
        }}
      >
        <Grid item xs={6}>
          <Item>ITEM PICTURE</Item>
          {console.log(props.items)}
        </Grid>
        <Grid item xs={3}>
          <Item>ITEM PRICE</Item>
        </Grid>
        <Grid item xs={1}>
          <Item>-</Item>
        </Grid>
        <Grid item xs={1}>
          <Item>+</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>ITEM NAME</Item>
        </Grid>
        <Grid item xs={7}>
          <Item>ITEM DESCRIPTION</Item>
        </Grid>
      </Grid>
    </>
  );
};

export default Cartitems;
