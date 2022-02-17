import React from 'react'
import { Outlet } from 'react-router-dom';
import '../Home.css'

const Home = () => {


    return (
        <div className="home-background">
            <p className="home-logo">Foodlux</p>
            <Outlet />
        </div>
    )
}

export default Home
