import React from 'react';

const Alcohol = (props) => {
  return (
    <div className="alc-wrapper">
    <h1>{props.logo}</h1>
    <div className="alc-grid a">
        {props.title}
    </div>
    <div className="alc-grid b">
        {props.food}
        {props.drinks}
    </div>
</div>
  );
}

export default Alcohol