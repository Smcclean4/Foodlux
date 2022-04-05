import React, { useState, useEffect } from "react";
import "../stylesheets/Fooditems.css";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";

const Fooditems = (props) => {
  // checking whether active is on or off based on true or false
  const [render, setRender] = useState(false);
  let status;

  useEffect(() => {
    status = document.querySelector(".button");
  });

  const handleClick = (e) => {
    e.preventDefault();
    status.classList.toggle("active", render === true);
    status.classList.contains("active") ? setRender(false) : setRender(true);
  };

  return (
    <>
      <div className="ff-wrapper">
        <div className="ff-grid a">
          <Button
            sx={{ marginBottom: "5px", backgroundColor:"dodgerblue" }}
            variant="contained"
            className="button active"
            onClick={(e) => handleClick(e)}
          >
            {props.title}
          </Button>
        </div>
        {!render ? (
          <div className="ff-grid b"></div>
        ) : (
          <>
            <div className="ff-grid b">
              <h2>Food</h2>
              <ul>
                {props.food?.map((items, idx) => {
                  return <li key={idx}>{items}</li>;
                })}
              </ul>
              <ul>
                {props.prices[0]?.map((price, idx) => {
                  return <li key={idx}>{price}</li>;
                })}
              </ul>
              <ul>
                {props.food?.map((fitems, id) => {
                  return <li key={id} value={fitems}><Checkbox sx={{"padding": "2.5px"}} size="small" /></li>
                })}
              </ul>
              <h2>Drinks</h2>
              <ul>
                {props.drinks?.map((items, idx) => {
                  return <li key={idx}>{items}</li>;
                })}
              </ul>
              <ul>
                {props.prices[1]?.map((price, idx) => {
                  return <li key={idx}>{price}</li>;
                })}
              </ul>
              <ul>
                {props.drinks?.map((ditems, id) => {
                  return <li key={id} value={ditems}><Checkbox sx={{"padding": "2.5px"}} size="small" /></li>
                })}
              </ul>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Fooditems;
