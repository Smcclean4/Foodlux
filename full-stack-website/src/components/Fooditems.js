import React, { useEffect, useState } from 'react';
import "../stylesheets/Fooditems.css"

const Fooditems = (props) => {
  const [render, setRender] = useState(false);
  let status;

  useEffect(() => {
      status = document.querySelector(".a")
  })

  const handleClick = (e) => {
      e.preventDefault()
      status.classList.toggle("active");
      status.classList.contains("active") ? setRender(false) : setRender(true)
    }

  return (
    <>
      <div className="ff-wrapper">
        <div onClick={((e) => handleClick(e))} className="ff-grid a active">
          {props.title}
        </div>
        {/* add conditional rendering for company items */
          render ? <div className="ff-grid b">
          <h2>Food</h2>
          {props.food?.map((items, idx) => {
            return <li key={idx}>{items}</li>
          })}
          <h2>Drinks</h2>
          {props.drinks?.map((items, idx) => {
            return <li key={idx}>{items}</li>
          })}
        </div> : console.log("closed section!")
        }
      </div>
    </>
  );
}

export default Fooditems
