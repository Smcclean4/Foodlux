import React from 'react';
import "../stylesheets/Alcohol.css"

const Alcohol = (props) => {
  return (
    <>
    <h1>{props.logo}</h1>
    <div className="alc-wrapper">
    <div className="alc-grid a">
        {props.title}
    </div>
    <div className="alc-grid b">
        {props.food}
        {props.drinks}
    </div>
</div>
    </>
  );
}

export default Alcohol