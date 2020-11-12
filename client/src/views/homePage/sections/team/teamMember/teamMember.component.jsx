import React from "react";

//Material UI
import { Grid } from "@material-ui/core";

// nodejs library that concatenates classes
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import imagesStyles from "../../../../../assets/jss/custom-material-styles/imagesStyles";

import {
  MemberContainer,
  MemberName,
  MemberTitle,
  MemberDescription,
} from "./teamMember.styles";

const useStyles = makeStyles(imagesStyles);

const TeamMember = ({ membre }) => {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  return (
    <MemberContainer key={membre.id} item xs={10} md={3} data-aos="zoom-in">
      <Grid
        item
        xs={8}
        style={{
          marginTop: "-33px",
        }}
      >
        <img
          alt="..."
          src={require(`../../../../../assets/images/team/${membre.avatar}`)}
          className={imageClasses}
        />
      </Grid>
      <Grid>
        <Grid item xs={10}>
          <MemberName variant="h4" align="center">
            {membre.name}
            <br />
            <span
              style={{
                color: "Graytext",
              }}
            >
              - {membre.profession.toUpperCase()} -
            </span>
          </MemberName>
        </Grid>
        <Grid item xs={10}>
          <MemberTitle variant="h6" align="center">
            {membre.title}
          </MemberTitle>
        </Grid>
        <Grid item xs={12}>
          <MemberDescription align="center">{membre.desc}</MemberDescription>
        </Grid>
      </Grid>
    </MemberContainer>
  );
};

export default TeamMember;
