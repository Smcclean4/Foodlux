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
      }, 1000)
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
              <h2>Food</h2>
              <Grid
                className="b"
                container
                spacing={0}
              >
                <Grid item xs={4}>
                  {menu?.map((images: { type: string; image: string | undefined; }, idx: React.Key | null | undefined) => {
                    return images.type === "food" ? (
                      <div key={idx}>
                        <img alt="" src={images.image} />
                      </div>
                    ) : (
                      ""
                    );
                  })}
                </Grid>
                <Grid item xs={4}>
                  {menu?.map((food: { type: string; item: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }, idx: React.Key | null | undefined) => {
                    return food.type === "food" ? (
                      <div key={idx} style={{ backgroundColor: searchItemIdentified(food.item) }}>
                        <li>{food.item}</li>
                      </div>
                    ) : ""
                  })}
                </Grid>
                <Grid item xs={2}>
                  {menu?.map((prices: { type: string; price: number | boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }, idx: React.Key | null | undefined) => {
                    return prices.type === "food" ? (
                      <div key={idx}>
                        <li>&#36;{prices.price}</li>
                      </div>
                    ) : (
                      ""
                    );
                  })}
                </Grid>
                <Grid item xs={2}>
                  {menu?.map((_: { type: string; }, idx: React.Key | "") => {
                    return _.type === "food" ? (
                      <span className="btn-styling" key={idx}>
                        <Button
                          onClick={() => addtocart(menu[idx])}
                          sx={{ color: "dodgerblue" }}
                          size="small"
                        >
                          Add
                        </Button>
                      </span>
                    ) : (
                      ""
                    );
                  })}
                </Grid>
              </Grid>
              <br></br>
              <h2>Drinks</h2>
              <Grid
                className="b"
                container
                spacing={0}
              >
                <Grid item xs={4}>
                  {menu?.map((images: { type: string; image: string | undefined; }, idx: React.Key | null | undefined) => {
                    return images.type === "drink" ? (
                      <div key={idx}>
                        <img alt="" src={images.image} />
                      </div>
                    ) : (
                      ""
                    );
                  })}
                </Grid>
                <Grid item xs={4}>
                  {menu?.map((drink: { type: string; item: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }, idx: React.Key | null | undefined) => {
                    return drink.type === "drink" ? (
                      <div key={idx} style={{ backgroundColor: searchItemIdentified(drink.item) }}>
                        <li>{drink.item}</li>
                      </div>
                    ) : (
                      ""
                    );
                  })}
                </Grid>
                <Grid item xs={2}>
                  {menu?.map((prices: { type: string; price: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }, idx: React.Key | null | undefined) => {
                    return prices.type === "drink" ? (
                      <div key={idx}>
                        <li>&#36;{prices.price}</li>
                      </div>
                    ) : (
                      ""
                    );
                  })}
                </Grid>
                <Grid item xs={2}>
                  {menu?.map((_: { type: string; }, idx: React.Key | "") => {
                    return _.type === "drink" ? (
                      <span className="btn-styling" key={idx}>
                        <Button
                          onClick={() => addtocart(menu[idx])}
                          sx={{ color: "dodgerblue" }}
                          size="small"
                        >
                          Add
                        </Button>
                      </span>
                    ) : (
                      ""
                    );
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
