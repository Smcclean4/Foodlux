import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

export const LoadingCircle = () => {
  return (
    <Box sx={{ width: "100%", position: "absolute", top: "50vh" }}>
      <LinearProgress color="inherit" />
    </Box>
  )
}
