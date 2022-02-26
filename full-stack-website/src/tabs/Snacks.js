import React from 'react';

const Snacks = (props) => {
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

export default Snacks