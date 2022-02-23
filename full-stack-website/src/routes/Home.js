import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import '../Home.css'

const Home = () => {
    // get businesses from database and set them into their section
    const [company, setCompany] = useState([])
    // get menu items from database and set items into items section
    const [items, setItems] = useState([])

    return (
        <div className="home-background">
            <p className="home-logo">Foodlux</p>
            <Outlet />
        </div>
    )
}

export default Home
