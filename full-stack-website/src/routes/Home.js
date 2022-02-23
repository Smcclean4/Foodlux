import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import '../Home.css'

const Home = () => {
    // get businesses from database and set them into their section
    const [fastfood, setFastfood] = useState([])
    const [snacks, setSnacks] = useState([])
    const [finedine, setFinedine] = useState([])
    // get menu items from database and set items into items section
    const [ffitems, setFfitems] = useState([],[])
    const [snitems, setSnitems] = useState([],[])
    const [Fditems, setFditems] = useState([],[])

    return (
        <div className="home-background">
            <p className="home-logo">Foodlux</p>
            <Outlet />
        </div>
    )
}

export default Home
