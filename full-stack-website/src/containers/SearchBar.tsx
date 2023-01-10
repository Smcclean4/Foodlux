import React, { useEffect, useState } from 'react'
import Button from "@mui/material/Button";
import "../stylesheets/SearchBar.css"

export const SearchBar = ({ data }) => {
  const [userInput, setUserInput] = useState("")
  const [dropDown, setDropDown] = useState([])

  const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setUserInput(e.target.value)
    const filteredData = data.filter((item: { item: string; }) => item.item.toLowerCase().includes(userInput))
    setDropDown(filteredData)
  }

  useEffect(() => {
    console.log(userInput)
    console.log(data)
  }, [userInput])

  return (
    <div className="searchbar-navigation">
      <div className="searchbar-container">
        <input className="searchbar-input" value={userInput} onChange={handleChange}></input>
        <Button sx={{
          color: 'white', backgroundColor: 'red', padding: '5px 35px', "&:hover": {
            backgroundColor: "rgb(162, 6, 6)",
          },
          borderRadius: '0 10px 10px 0'
        }}>
          Search
        </Button>
      </div>
      <div className="dropdown">
        {dropDown?.map((items: any, idx) => {
          return (
            dropDown.length ? (
              <ul key={idx} className="dropdown-items">
                <li>
                  <h2>{items.item}</h2>
                  <h5><i>from {items.company}</i></h5>
                </li>
              </ul>
            ) : <h4>Item Cannot Be Found.</h4>
          )
        })}
      </div>
    </div>
  )
}
