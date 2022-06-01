import React from "react";
import Grid from "@mui/material/Grid";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Cartitems = ({ props }) => {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <>
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
        <Grid item xs={3}>
          <Item>SECTION</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>SECTION</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>SECTION</Item>
        </Grid>
        <Grid item xs={7}>
          <Item>SECTION</Item>
        </Grid>
      </Grid>
    </>
  );
};

export default Cartitems;
