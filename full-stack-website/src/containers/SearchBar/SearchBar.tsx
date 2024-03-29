import React, { useState } from 'react'
import Button from "@mui/material/Button";
import SearchIcon from '@mui/icons-material/Search'
import "../../stylesheets/SearchBar.css"

export interface UserInputInterface {
  searchTermCompany: string;
  searchTermCategory: string;
}

const SearchBar = ({ data, searchforitem }) => {
  const [userInput, setUserInput] = useState("")
  const [userInputInfo, setUserInputInfo] = useState<UserInputInterface>({ searchTermCompany: '', searchTermCategory: '' })
  const [dropDown, setDropDown] = useState([])
  const [open, setOpen] = useState(false)

  // get data from all categories in home. then map through data and filter from what the user is searching to display items that correspond
  const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setUserInput(e.target.value)
    const dataItems: any = [];
    data.forEach((menu: { menu: any; }[]) => menu.map((food: { menu: any[] }) => food.menu.map((items: any) => dataItems.push(items))))
    const filteredData = dataItems.filter((val: { item: string; }) => val.item.toLowerCase().includes(userInput.toLowerCase()))
    setDropDown(filteredData)
  }

  // toggle for open and close of dropdown modal
  const dropDownFocusToggle = () => {
    setOpen(!open)
  }

  //whenever any of the search items are clicked store them in state.
  const searchClick = () => {
    searchforitem(userInput, userInputInfo)
    setUserInput("")
  }

  return (
    <div className="searchbar-navigation" data-testid="search-bar">
      <div className="searchbar-container">
        <input className="searchbar-input" type="search" value={userInput} onChange={handleChange} onFocus={dropDownFocusToggle} onBlur={dropDownFocusToggle} onKeyDown={e => e.key === 'Enter' && searchClick()}></input>
        <Button sx={{
          color: 'white', backgroundColor: 'red', padding: '2px 35px', "&:hover": {
            backgroundColor: "rgb(162, 6, 6)",
          },
          borderRadius: '0 10px 10px 0', cursor: "pointer"
        }}
          onClick={searchClick}
          endIcon={<SearchIcon />}>
          Search
        </Button>
      </div>
      {open ? (
        <div className="dropdown">
          {dropDown?.length !== 0 ? (
            dropDown?.map((dropDownItems: any, idx: React.Key) => {
              return (
                <div key={idx} className="dropdown-items">
                  <Button
                    onMouseDown={() => {
                      setUserInput(dropDownItems.item)
                      setUserInputInfo({ searchTermCompany: dropDownItems.company, searchTermCategory: dropDownItems.category })
                    }}
                    sx={{
                      color: "black", cursor: "pointer"
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
