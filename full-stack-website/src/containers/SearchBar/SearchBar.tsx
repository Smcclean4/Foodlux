import React, { useState } from 'react'
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import SearchIcon from '@mui/icons-material/Search'
import "../../stylesheets/SearchBar.css"

export interface UserInputInterface {
  searchTermCompany: string;
  searchTermCategory: string;
}

const flattenMenu = (data: any) => {
  if (!Array.isArray(data)) return [];
  const dataItems: any[] = [];
  data.forEach((menu: { menu: any; }[]) => {
    if (!Array.isArray(menu)) return;
    menu.forEach((food: { menu: any[] }) => food.menu?.forEach((items: any) => dataItems.push(items)));
  });
  return dataItems;
}

const SearchBar = ({ data, searchforitem }) => {
  const [userInput, setUserInput] = useState("")
  const [userInputInfo, setUserInputInfo] = useState<UserInputInterface>({ searchTermCompany: '', searchTermCategory: '' })
  const options = flattenMenu(data)

  const searchClick = () => {
    searchforitem(userInput, userInputInfo)
    setUserInput("")
  }

  return (
    <div className="searchbar-navigation" data-testid="search-bar">
      <Stack className="searchbar-container" direction="row" spacing={0} alignItems="stretch">
        <Autocomplete
          freeSolo
          fullWidth
          options={options}
          inputValue={userInput}
          getOptionLabel={(option) => typeof option === "string" ? option : option.item}
          filterOptions={(opts, state) =>
            opts.filter((opt) => opt.item?.toLowerCase().includes(state.inputValue.toLowerCase()))
          }
          onInputChange={(_, value) => setUserInput(value)}
          onChange={(_, value) => {
            if (value && typeof value !== "string") {
              setUserInput(value.item)
              setUserInputInfo({ searchTermCompany: value.company, searchTermCategory: value.category })
            }
          }}
          renderOption={(props, option) => (
            <li {...props} key={`${option.item}-${option.company}`}>
              <div>
                <Typography variant="subtitle1">{option.item}</Typography>
                <Typography variant="caption" color="text.secondary"><i>from {option.company}</i></Typography>
              </div>
            </li>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              className="searchbar-input"
              placeholder="Search the menu"
              size="small"
              sx={{
                bgcolor: "common.white",
                borderRadius: "12px 0 0 12px",
                "& .MuiOutlinedInput-root": { borderRadius: "12px 0 0 12px" },
              }}
              onKeyDown={e => e.key === 'Enter' && searchClick()}
            />
          )}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={searchClick}
          endIcon={<SearchIcon />}
          sx={{ borderRadius: "0 10px 10px 0", px: 3, whiteSpace: "nowrap" }}
        >
          Search
        </Button>
      </Stack>
    </div>
  )
}

export default SearchBar
