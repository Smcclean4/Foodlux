import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import "../stylesheets/Foodluxbus.css"

export const Foodluxbus = ({ timer, settimer }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => (settimer((seconds) => seconds - 1)), 1000)
    } else {
      const submitData = () => {
        console.log("submitting payment info!")
        localStorage.removeItem('cart')
        navigate('/Home')
      }
      submitData();
    }
  }, [timer])

  return (
    <div className="foodluxbus-background">
      <p className="foodluxbus-header">Your Order Details Will Be Emailed Shortly!</p>
      <div className="foodluxbus-group">
        <div className="airflow-group">
          <div className="airflow-1"></div>
          <div className="airflow-2"></div>
          <div className="airflow-3"></div>
        </div>
        <img src='https://svgshare.com/i/q0Z.svg' className="foodluxbus" title='foodlux bus' />
      </div>
      <p className="foodluxbus-redirect">Redirecting To Home In {timer} Seconds!</p>
    </div>
  )
}