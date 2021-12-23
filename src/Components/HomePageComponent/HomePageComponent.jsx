import React from "react";
import Grid from "@mui/material/Grid";
import "./HomePageComponent.css";

const HomePageComponent = ({children}) => {
  return (
    <main className="homepage">
      <Grid container direction="row" justifyContent="center" alignItems="center" className="homepage_container">
        <Grid item xs={12} lg={6} className="form-container">
          <div>{children}</div>
        </Grid>
        <Grid item xs={12} lg={6} className="image-container">
            <figure className="homepage_banner">
                <img src="/home.jpg" alt="homepage-banner"/>
            </figure>
        </Grid>
      </Grid>
    </main>
  );
};

export default HomePageComponent;
