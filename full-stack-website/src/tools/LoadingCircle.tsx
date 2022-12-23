import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import "../stylesheets/LoadingCircle.css"

export const LoadingCircle = () => {
  return (
    <div className="loading-background">
      <Box sx={{ width: "100%", position: "absolute", top: "50vh" }}>
        <LinearProgress color="inherit" />
      </Box>
    </div>
  )
}
