import React from 'react';

const Alcohol = (props) => {
  return (
   <div>
    {props.logo}
    <br />
    {props.title}
    <br />
    {props.description}
   </div>
  );
}

export default Alcohol