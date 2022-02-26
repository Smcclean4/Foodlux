import React from 'react';

const Fastfood = (props) => {
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

export default Fastfood
