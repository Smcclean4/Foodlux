import React, { useState, useEffect } from "react";
import "../stylesheets/Fooditems.css";
import Button from '@mui/material/Button';

const Fooditems = (props) => {
  // checking whether active is on or off based on true or false
  const [render, setRender] = useState(false);
  let status;

  useEffect(() => {
    status = document.querySelector(".button");
  });

  const handleClick = (e) => {
    e.preventDefault();
    status.classList.toggle("active", render == true);
    status.classList.contains("active") ? setRender(false) : setRender(true);
  };

  return (
    <>
      <div className="ff-wrapper">
        <div className="ff-grid a">
        <Button sx={{marginBottom:"5px"}} variant="contained" className="button active" onClick={(e) => handleClick(e)}>
            {props.title}
        </Button>
        </div>
        {!render ? (
          <div className="ff-grid b"></div>
        ) : (
          <div className="ff-grid b">
            <h2>Food</h2>
            {props.food?.map((items, idx) => {
              return <li key={idx}>{items}</li>;
            })}
            <h2>Drinks</h2>
            {props.drinks?.map((items, idx) => {
              return <li key={idx}>{items}</li>;
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Fooditems;
