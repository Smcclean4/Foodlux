import React from 'react';
import "../stylesheets/Finedine.css"

const Finedine = (props) => {
  return (
    <>
    <h1>{props.logo}</h1>
    <div className="fd-wrapper">
    <div className="fd-grid a">
        {props.title}
    </div>
    <div className="fd-grid b">
        {props.food}
        {props.drinks}
    </div>
</div>
    </>
  );
}

export default Finedine