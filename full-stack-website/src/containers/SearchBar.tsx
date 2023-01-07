import React, { useEffect, useState } from 'react'
import Button from "@mui/material/Button";
import "../stylesheets/SearchBar.css"

export const SearchBar = () => {
  const [userInput, setUserInput] = useState("")

  const handleChange = (e) => {
    setUserInput(e.target.value)
  }

  useEffect(() => {
    console.log(userInput)
  }, [userInput])

  return (
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
  )
}
