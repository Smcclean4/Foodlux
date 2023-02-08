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
            sx={{ marginBottom: "5px", backgroundColor: "dodgerblue" }}
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
                spacing={0}
              >
                <Grid item xs={2.5}>
                  {menu?.map((images: { type: string; image: string | undefined; }, idx: React.Key | null | undefined) => {
                    return images.type === "food" ? (
                      <div key={idx} className="home-items">
                        <img alt="" src={images.image} className="food-image" />
                      </div>
                    ) : ""
                  })}
                </Grid>
                <Grid item xs={1.5}>
                  {menu?.map((food: { type: string; item: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }, idx: React.Key | null | undefined) => {
                    return food.type === "food" ? (
                      <div key={idx} className="home-items">
                        <li style={{ backgroundColor: searchItemIdentified(food.item) }}>{food.item}</li>
                      </div>
                    ) : ""
                  })}
                </Grid>
                <Grid item xs={6}>
                  {menu?.map((descs: { type: string; desc: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }, idx: React.Key | null | undefined) => {
                    return descs.type === "food" ? (
                      <div key={idx} className="home-items-desc">
                        <li>{descs.desc}</li>
                      </div>
                    ) : ""
                  })}
                </Grid>
                <Grid item xs={1}>
                  {menu?.map((prices: { type: string; price: number | boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }, idx: React.Key | null | undefined) => {
                    return prices.type === "food" ? (
                      <div key={idx} className="home-items">
                        <li>&#36;{prices.price}</li>
                      </div>
                    ) : ""
                  })}
                </Grid>
                <Grid item xs={1}>
                  {menu?.map((_: { type: string; }, idx: React.Key | "") => {
                    return _.type === "food" ? (
                      <div key={idx} className="home-items">
                        <li>
                          <Button
                            onClick={() => addtocart(menu[idx])}
                            sx={{
                              color: "white", backgroundColor: "dodgerblue", "&:hover": {
                                color: "white",
                                backgroundColor: "rgb(22, 110, 199)",
                              }
                            }}
                            size="small"
                          >
                            Add
                          </Button>
                        </li>
                      </div>
                    ) : ""
                  })}
                </Grid>
              </Grid>
              <br></br>
              <p className="menu-titles">Drinks</p>
              <Grid
                className="b"
                container
                spacing={0}
              >
                <Grid item xs={2.5}>
                  {menu?.map((images: { type: string; image: string | undefined; }, idx: React.Key | null | undefined) => {
                    return images.type === "drink" ? (
                      <div key={idx} className="home-items">
                        <img alt="" src={images.image} className="drink-image" />
                      </div>
                    ) : ""
                  })}
                </Grid>
                <Grid item xs={1.5}>
                  {menu?.map((drink: { type: string; item: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }, idx: React.Key | null | undefined) => {
                    return drink.type === "drink" ? (
                      <div key={idx} className="home-items">
                        <li style={{ backgroundColor: searchItemIdentified(drink.item) }}>{drink.item}</li>
                      </div>
                    ) : ""
                  })}
                </Grid>
                <Grid item xs={6}>
                  {menu?.map((descs: { type: string; desc: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }, idx: React.Key | null | undefined) => {
                    return descs.type === "drink" ? (
                      <div key={idx} className="home-items-desc">
                        <li>{descs.desc}</li>
                      </div>
                    ) : ""
                  })}
                </Grid>
                <Grid item xs={1}>
                  {menu?.map((prices: { type: string; price: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }, idx: React.Key | null | undefined) => {
                    return prices.type === "drink" ? (
                      <div key={idx} className="home-items">
                        <li>&#36;{prices.price}</li>
                      </div>
                    ) : ""
                  })}
                </Grid>
                <Grid item xs={1}>
                  {menu?.map((_: { type: string; }, idx: React.Key | "") => {
                    return _.type === "drink" ? (
                      <div key={idx} className="home-items">
                        <li>
                          <Button
                            onClick={() => addtocart(menu[idx])}
                            sx={{
                              color: "white", backgroundColor: "dodgerblue", "&:hover": {
                                color: "white",
                                backgroundColor: "rgb(22, 110, 199)",
                              }
                            }}
                            size="small"
                          >
                            Add
                          </Button>
                        </li>
                      </div>
                    ) : ""
                  })}
                </Grid>
              </Grid>
            </Box>
          </>
        )}
      </div>
    </>
  );
};

export default Homeitems;
