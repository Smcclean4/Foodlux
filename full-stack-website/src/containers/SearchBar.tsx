import React, { useEffect, useState } from 'react'
import Button from "@mui/material/Button";
import "../stylesheets/SearchBar.css"

export const SearchBar = ({ data }) => {
  const [userInput, setUserInput] = useState("")
  const [dropDown, setDropDown]: any = useState([])
  const [open, setOpen] = useState(false)

  const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setUserInput(e.target.value)
    const dataItems: any = [];
    let dataInfo: any;
    dataInfo = data.map((menu: any[]) => menu.map((food: { menu: any[]; }) => food.menu.map((items) => {
      dataItems.push(items)
    })))
    const filteredData = dataItems.filter((val: { item: string; }) => val.item.toLowerCase().includes(userInput.toLowerCase()))
    setDropDown(filteredData)
  }

  const dropDownFocusToggle = () => {
    setOpen(!open)
  }

  return (
    <div className="searchbar-navigation">
      <div className="searchbar-container">
        <input className="searchbar-input" value={userInput} onChange={handleChange} onBlur={dropDownFocusToggle} onFocus={dropDownFocusToggle}></input>
        <Button sx={{
          color: 'white', backgroundColor: 'red', padding: '5px 35px', "&:hover": {
            backgroundColor: "rgb(162, 6, 6)",
          },
          borderRadius: '0 10px 10px 0'
        }}>
          Search
        </Button>
      </div>
      {open ? (
        <div className="dropdown">
          {dropDown.length !== 0 ? (
            dropDown?.map((dropDownItems: any, idx: React.Key | null | undefined) => {
              return (
                <ul key={idx} className="dropdown-items">
                  <li>
                    <h2>{dropDownItems.item}</h2>
                    <h5><i>from {dropDownItems.company}</i></h5>
                  </li>
                </ul>
              )
            })
          ) : <h4>Item Cannot Be Found.</h4>}
        </div>
      ) : <></>}
    </div>
  )
}
