import React, { useState } from 'react'
import Button from "@mui/material/Button";
import { CartInfoInterface } from '../api/Categories';
import "../stylesheets/SearchBar.css"

const SearchBar = ({ data, searchforitem }) => {
  const [userInput, setUserInput]: any = useState("")
  const [userInputInfo, setUserInputInfo]: any = useState({ searchTermCompany: '', searchTermCategory: '' })
  const [dropDown, setDropDown] = useState([])
  const [open, setOpen] = useState(false)

  const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setUserInput(e.target.value)
    const dataItems: any = [];
    let dataInfo: CartInfoInterface;
    dataInfo = data.map((menu: { menu: any; }[]) => menu.map((food: { menu: any[] }) => food.menu.map((items: any) => dataItems.push(items))))
    const filteredData = dataItems.filter((val: { item: string; }) => val.item.toLowerCase().includes(userInput.toLowerCase()))
    setDropDown(filteredData)
  }

  const searchClick = () => {
    searchforitem(userInput, userInputInfo)
    setUserInput("")
  }

  const dropDownFocusToggle = () => {
    setOpen(!open)
  }

  return (
    <div className="searchbar-navigation">
      <div className="searchbar-container">
        <input className="searchbar-input" type="search" value={userInput} onChange={handleChange} onFocus={dropDownFocusToggle} onBlur={dropDownFocusToggle}></input>
        <Button sx={{
          color: 'white', backgroundColor: 'red', padding: '5px 35px', "&:hover": {
            backgroundColor: "rgb(162, 6, 6)",
          },
          borderRadius: '0 10px 10px 0'

        }}
          onClick={searchClick}>
          Search
        </Button>
      </div>
      {open ? (
        <div className="dropdown">
          {dropDown?.length !== 0 ? (
            dropDown?.map((dropDownItems: {
              category: string; item: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal; company: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal;
            }, idx: React.Key) => {
              return (
                <div key={idx} className="dropdown-items">
                  <Button
                    onMouseDown={() => {
                      setUserInput(dropDownItems.item)
                      setUserInputInfo({ searchTermCompany: dropDownItems.company, searchTermCategory: dropDownItems.category })
                    }}
                    sx={{
                      color: "black"
                    }}>
                    <div>
                      <h2>{dropDownItems.item}</h2>
                      <h5><i>from {dropDownItems.company}</i></h5>
                    </div>
                  </Button>
                </div>
              )
            })
          ) : <h4>Item Cannot Be Found.</h4>}
        </div>
      ) : <></>}
    </div>
  )
}

export default SearchBar
