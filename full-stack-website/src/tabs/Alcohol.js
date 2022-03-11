import React, {useState, useEffect} from 'react';
import "../stylesheets/Alcohol.css"

const Alcohol = (props) => {
  const [render, setRender] = useState(true);
  let status;

  useEffect(() => {
      status = document.querySelector(".a")
  })

  const handleClick = (e) => {
      e.preventDefault();
      status.classList.toggle("active");
      status.classList.contains("active") ? setRender(true) : setRender(false)
    }

  return (
    <>
      <div className="alc-wrapper">
        <div onClick={((e) => handleClick(e))} className="alc-grid a active">
          {props.title}
        </div>
        {/* add conditional rendering for company items */
          render ? <div className="alc-grid b">
          <h2>Drinks</h2>
          {props.drinks?.map((items, idx) => {
            return <li key={idx}>{items}</li>
          })}
        </div> : console.log("closed section")
        }
      </div>
    </>
  );
}

export default Alcohol