import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';
import "../../stylesheets/Homeitems.css";

const Homeitems = ({ menu, title, addtocart, searchinfo, render, setrender }) => {
  const [highlight, setHighlight] = useState(true);

  const renderChange = () => {
    setrender(!render);
  };

  const isHighlighted = (item: string) => highlight && searchinfo.itemFromSearch === item;

  useEffect(() => {
    const compareSearchInfo = () => {
      return searchinfo.companyFromSearch === title ? setrender(true) : null
    }
    compareSearchInfo()
  }, [searchinfo, setrender, title])

  useEffect(() => {
    setHighlight(true);
    const timeout = setTimeout(() => setHighlight(false), 5000);
    return () => clearTimeout(timeout);
  }, [searchinfo]);

  const renderSection = (sectionTitle: string, type: string) => {
    const items = menu?.filter((item: { type: string; }) => item.type === type) ?? [];
    if (!items.length) return null;

    return (
      <Box sx={{ mt: 2 }}>
        <Typography variant="h4" className="menu-titles" sx={{ color: "common.white", mb: 2, textAlign: "left" }}>
          {sectionTitle}
        </Typography>
        <Grid container spacing={2}>
          {items.map((items: { image: string; item: string; desc: string; price: number; }, idx: number) => {
            const menuIndex = menu.indexOf(items);
            return (
              <Grid item xs={12} sm={6} md={4} key={`${type}-${idx}`}>
                <Card
                  className="home-item-group"
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    bgcolor: isHighlighted(items.item) ? "error.light" : "background.paper",
                    transition: "background-color 0.3s ease",
                  }}
                >
                  <Box className="home-items" sx={{ height: 180, overflow: "hidden" }}>
                    <LazyLoadImage alt={items.item} src={items.image} PlaceholderSrc={items.image} effect="blur" height="180" width="100%" style={{ objectFit: "cover", width: "100%" }} />
                  </Box>
                  <CardContent sx={{ flexGrow: 1, textAlign: "left" }} className="home-items-desc">
                    <Typography variant="h6" component="div">{items.item}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>{items.desc}</Typography>
                    <Typography variant="subtitle1" sx={{ mt: 1.5, fontWeight: 700 }}>${items.price}</Typography>
                  </CardContent>
                  <CardActions sx={{ px: 2, pb: 2 }}>
                    <Button
                      onClick={() => addtocart(menu[menuIndex], menuIndex)}
                      variant="contained"
                      color="primary"
                      fullWidth
                      data-testid={`addcart-test-${menuIndex}`}
                    >
                      Add
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    );
  };

  return (
    <div className="ff-wrapper" data-testid='Homeitems'>
      <Accordion
        expanded={Boolean(render)}
        onChange={renderChange}
        sx={{ bgcolor: "transparent", color: "common.white", boxShadow: "none", "&:before": { display: "none" } }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "common.white" }} />}
          data-testid="title-button-test"
          className="button active"
          sx={{
            bgcolor: "primary.main",
            color: "common.white",
            borderRadius: 2,
            mb: 1,
            "&:hover": { bgcolor: "primary.dark" },
          }}
        >
          <Typography variant="h6">{title}</Typography>
        </AccordionSummary>
        <AccordionDetails className="b" sx={{ px: 0 }}>
          {renderSection("Food", "food")}
          {renderSection("Drinks", "drink")}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Homeitems;
