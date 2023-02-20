import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "../stylesheets/Homeitems.css";

const Homeitems = ({ menu, title, addtocart, searchinfo }) => {

  const [render, setRender] = useState(false);
  const [found, setFound] = useState("rgba(255, 0, 0, 0.547)");

  const renderChange = () => {
    setRender(!render);
  };

  const searchItemIdentified = (item: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined) => {
    if (searchinfo.itemFromSearch === item) {
      setTimeout(() => {
        setFound("")
      }, 5000)
      return found
    } else {
      return ""
    }
  }

  useEffect(() => {
    const compareSearchInfo = () => {
      return searchinfo.companyFromSearch === title ? setRender(true) : null
    }
    compareSearchInfo()
  }, [searchinfo, title])

  return (
    <>
      <div className="ff-wrapper">
        <div className="ff-grid a">
          <Button
            sx={{ marginBottom: "5px", marginRight: "5px", backgroundColor: "dodgerblue" }}
            variant="contained"
            className="button active"
            onClick={() => renderChange()}
          >
            {title}
          </Button>
        </div>
        {!render ? (
          <div className="ff-grid b"></div>
        ) : (
          <>
            <Box
              sx={{
                backdropFilter: "blur(5px)",
                flexGrow: 1,
                padding: "5px",
                color: "white",
              }}
            >
              <p className="menu-titles">Food</p>
              <Grid
                className="b"
                container
                spacing={{ xs: 0, md: 3 }}
                columns={{ xs: 1, sm: 2, md: 12 }}>
                {menu?.map((items, idx) => {
                  if (items.type === "food") {
                    return (
                      <div className="home-item-group" key={idx}>
                        <Grid item xs={4} className="home-items">
                          <img alt="" src={items.image} className="item-image" />
                        </Grid>
                        <Grid item xs={6} className="home-items-desc">
                          <li style={{ backgroundColor: searchItemIdentified(items.item) }}><b><i>{items.item}</i></b></li>
                          <li>{items.desc}</li>
                        </Grid>
                        <Grid item xs={1} className="home-items">
                          <li>&#36;{items.price}</li>
                        </Grid>
                        <Grid item xs={1} className="home-items">
                          <Button
                            onClick={() => addtocart(menu[idx])}
                            sx={{
                              color: "white", backgroundColor: "dodgerblue", "&:hover": {
                                color: "white",
                                backgroundColor: "rgb(22, 110, 199)",
                              }
                            }}
                            size="large"
                          >
                            Add
                          </Button>
                        </Grid>
                      </div>
                    )
                  }
                })}
              </Grid>
              <br></br>
              <p className="menu-titles">Drinks</p>
              <Grid
                className="b"
                container
                spacing={{ xs: 0, md: 3 }}
                columns={{ xs: 1, sm: 2, md: 12 }}>
                {menu?.map((items, idx) => {
                  if (items.type === "drink") {
                    return (
                      <div className="home-item-group" key={idx}>
                        <Grid item xs={4} className="home-items">
                          <img alt="" src={items.image} className="item-image" />
                        </Grid>
                        <Grid item xs={6} className="home-items-desc">
                          <li style={{ backgroundColor: searchItemIdentified(items.item) }}><b><i>{items.item}</i></b></li>
                          <li>{items.desc}</li>
                        </Grid>
                        <Grid item xs={1} className="home-items">
                          <li>&#36;{items.price}</li>
                        </Grid>
                        <Grid item xs={1} className="home-items">
                          <Button
                            onClick={() => addtocart(menu[idx])}
                            sx={{
                              color: "white", backgroundColor: "dodgerblue", "&:hover": {
                                color: "white",
                                backgroundColor: "rgb(22, 110, 199)",
                              }
                            }}
                            size="large"
                          >
                            Add
                          </Button>
                        </Grid>
                      </div>
                    )
                  }
                })}
              </Grid>
            </Box>
          </>
        )}
      </div>
    </>
  );
};

export default Homeitems;
