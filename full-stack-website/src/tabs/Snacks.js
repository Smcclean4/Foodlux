import React from 'react';
import "../stylesheets/Snacks.css"

const Snacks = (props) => {
  return (
    <>
    <h1 className="sn-logo">{props.logo}</h1>
   <div className="sn-wrapper">
        <div className="sn-grid a">
            {props.title}
        </div>
        <div className="sn-grid b">
            <h2>Food</h2>
            {props.food?.map((items, idx)=> {
              return <li key={idx}>{items}</li>
            })}
            <h2>Drinks</h2>
            {props.drinks?.map((items, idx) => {
              return <li key={idx}>{items}</li>
            })}
        </div>
   </div>
   </>
  );
}

export default Snacks