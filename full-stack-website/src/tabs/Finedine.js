import React from 'react';
import "../stylesheets/Finedine.css"

const Finedine = (props) => {
  return (
    <>
    <h1 className="fd-logo">{props.logo}</h1>
   <div className="fd-wrapper">
        <div className="fd-grid a">
            {props.title}
        </div>
        <div className="fd-grid b">
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

export default Finedine