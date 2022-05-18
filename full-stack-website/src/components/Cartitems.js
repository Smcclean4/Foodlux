import React from 'react'
import Grid from '@mui/material/Grid'


const Cartitems = ({props}) => {
  return (
    <>
      <Grid sx={{width:"90%", backgroundColor:"whitesmoke", margin:"0 auto", padding:"20px 0 20px 0"}}>
        <Grid item xs={10}>
          <h2>ITEM MONEY</h2>
        </Grid>
        <Grid item xs={10}>
          <h2>PRICE MONEY</h2>
        </Grid>
        <Grid item xs={10}>
          <h2>MONEY</h2>
        </Grid>
        <Grid item xs={10}>
          <h2>MONEY</h2>
        </Grid>
      </Grid>
    </>
  )
}

export default Cartitems