import React from 'react';
import "../stylesheets/Fastfood.css"

const Fastfood = (props) => {
  return (
    <>
    <h1 className="ff-logo">{props.logo}</h1>
   <div className="ff-wrapper">
        <div className="ff-grid a">
            {props.title}
        </div>
        <div className="ff-grid b">
            {props.food}
            {props.drinks}
        </div>
   </div>
   </>
  );
}

export default Fastfood
