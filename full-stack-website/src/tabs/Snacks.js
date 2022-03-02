import React from 'react';
import "../stylesheets/Snacks.css"

const Snacks = (props) => {
  return (
    <>
    <h1>{props.logo}</h1>
    <div className="sn-wrapper">
    <div className="sn-grid a">
        {props.title}
    </div>
    <div className="sn-grid b">
        {props.food}
        {props.drinks}
    </div>
</div>
    </>
  );
}

export default Snacks