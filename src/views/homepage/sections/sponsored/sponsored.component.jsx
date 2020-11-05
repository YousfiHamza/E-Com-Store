import React from "react";

//Material UI
import { Typography, Grid } from "@material-ui/core";

import HomeButton from "../homeButton/homeButton.component";

import Background from "../../../../assets/images/backgrounds/wave_3.png";

import { ArrowDropDownCircleTwoTone } from "@material-ui/icons";

const Sponsored = () => {
  return (
    <Grid
      container
      justify="space-around"
      style={{
        backgroundImage: "url(" + Background + ")",
        backgroundSize: "100% 17% ",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#00539c",
        padding: "55px",
      }}
    >
      <Grid Item xs={10} md={8} style={{ marginBottom: "0" }}>
        <Typography
          variant="h2"
          align="center"
          style={{
            fontFamily: "lobster",
            marginBottom: "44px",
            textShadow: "5px 5px 10px cyan, 5px 5px 10px blue",
          }}
          data-aos="slide-right"
        >
          Sponsored By YousFitness
        </Typography>
        <Typography
          align="center"
          style={{
            color: "white",
            fontStyle: "italic",
          }}
          data-aos="slide-left"
        >
          Regardless of what an employee’s role is, at some point they will have
          to work with other people at the company – whether that’s a colleague,
          customer or other stakeholder.
          <br />
          Team spirit is an attitude that enables people to work well together.
          It’s about camaraderie, cooperation and collaboration between
          different members of the organization.
        </Typography>
      </Grid>
      <Grid item xs={11} justify="space-around" data-aos="slide-right">
        <HomeButton
          startIcon={<ArrowDropDownCircleTwoTone />}
          endIcon={<ArrowDropDownCircleTwoTone />}
          content="Join Us Now"
          color="primary"
          to="/contact"
        />
      </Grid>
    </Grid>
  );
};

export default Sponsored;
