import React from "react";

//Material UI
import { Typography, Grid } from "@material-ui/core";

import HomeButton from "../homeButton/homeButton.component";

import {
  SponsoredContainer,
  SponsoredTitle,
  SponsoredDescription,
} from "./sponsored.styles";

import { ArrowDropDownCircleTwoTone } from "@material-ui/icons";

const Sponsored = () => {
  return (
    <SponsoredContainer container justify="space-around">
      <Grid Item xs={10} md={8} style={{ marginBottom: "0" }}>
        <SponsoredTitle variant="h2" align="center" data-aos="slide-right">
          Sponsored By YousFitness
        </SponsoredTitle>
        <SponsoredDescription align="center" data-aos="slide-left">
          Regardless of what an employee’s role is, at some point they will have
          to work with other people at the company – whether that’s a colleague,
          customer or other stakeholder.
          <br />
          Team spirit is an attitude that enables people to work well together.
          It’s about camaraderie, cooperation and collaboration between
          different members of the organization.
        </SponsoredDescription>
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
    </SponsoredContainer>
  );
};

export default Sponsored;
