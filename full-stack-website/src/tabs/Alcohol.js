import React from 'react';
import "../stylesheets/Alcohol.css"

const Alcohol = (props) => {
  return (
    <>
    <h1 className="alc-logo">{props.logo}</h1>
   <div className="alc-wrapper">
        <div className="alc-grid a">
            {props.title}
        </div>
        <div className="alc-grid b">
            <h2>Drinks</h2>
            {props.drinks?.map((items, idx) => {
              return <li key={idx}>{items}</li>
            })}
        </div>
   </div>
   </>
  );
}

export default Alcohol