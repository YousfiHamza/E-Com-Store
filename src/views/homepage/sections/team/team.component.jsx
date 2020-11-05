import React from "react";

//Material UI
import { Typography, Grid } from "@material-ui/core";

// nodejs library that concatenates classes
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import imagesStyles from "../../../../assets/jss/custom-material-styles/imagesStyles";

import Background from "../../../../assets/images/backgrounds/wave_2.png";

const useStyles = makeStyles(imagesStyles);

const OUR_TEAM = [
  {
    id: 1,
    avatar: "team2.jpg",
    name: "Mizo Ysf",
    profession: "Model",
    title: "Head of the Marketing Team",
    desc:
      "Regardless of what an employee’s role is, at some point they will have to work with other people at the company – whether that’s a colleague, customer or other stakeholder. Team spirit is an attitude that enables people to work well together. It’s about camaraderie, cooperation and collaboration between different members of the organization.",
  },
  {
    id: 2,
    avatar: "team1.jpg",
    name: "Yousfi Hamza",
    profession: "Coach",
    title: "CEO, Co-Founder",
    desc:
      "Regardless of what an employee’s role is, at some point they will have to work with other people at the company – whether that’s a colleague, customer or other stakeholder. Team spirit is an attitude that enables people to work well together. It’s about camaraderie, cooperation and collaboration between different members of the organization.",
  },
  {
    id: 3,
    avatar: "team3.jpg",
    name: "Hamzaoui Youssef",
    profession: "Athlete",
    title: "Head of the Sales Team",
    desc:
      "Regardless of what an employee’s role is, at some point they will have to work with other people at the company – whether that’s a colleague, customer or other stakeholder. Team spirit is an attitude that enables people to work well together. It’s about camaraderie, cooperation and collaboration between different members of the organization.",
  },
];

const Team = () => {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <Grid
      container
      justify="space-around"
      style={{
        backgroundImage: "url(" + Background + ")",
        backgroundSize: "100% 100px",
        backgroundRepeat: "no-repeat",
        paddingTop: "56px",
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
          data-aos="fade-up"
        >
          The T.E.A.M
        </Typography>
        <Typography
          align="center"
          style={{
            color: "Gray",
            fontStyle: "italic",
          }}
          data-aos="fade-up"
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
      <Grid
        container
        xs={12}
        justify="space-around"
        alignContent="space-around"
        style={{
          margin: "44px ",
        }}
      >
        {OUR_TEAM.map((membre) => (
          <Grid
            key={membre.id}
            item
            xs={10}
            md={3}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "0 22px",
              marginTop: "44px",
              borderRadius: "55px",
              background:
                "linear-gradient(90deg, rgba(255,255,255,0.33) 50%, rgba(0,212,255,0.66) 75%, rgba(0,9,121,1) 100%)",
            }}
            data-aos="zoom-in"
          >
            <Grid
              item
              xs={8}
              style={{
                marginTop: "-33px",
              }}
            >
              <img
                alt="..."
                src={require(`../../../../assets/images/team/${membre.avatar}`)}
                className={imageClasses}
              />
            </Grid>
            <Grid>
              <Grid item xs={10}>
                <Typography
                  variant="h4"
                  align="center"
                  style={{
                    fontFamily: "lobster",
                    fontSize: "26px",
                    fontWeight: "bold",
                    color: "darkblue",
                  }}
                >
                  {membre.name}
                  <br />
                  <span
                    style={{
                      color: "Graytext",
                    }}
                  >
                    - {membre.profession.toUpperCase()} -
                  </span>
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <Typography
                  variant="h6"
                  align="center"
                  style={{
                    fontFamily: "Arial",
                    fontSize: "18px",
                    color: "gray",
                  }}
                >
                  {membre.title}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  align="center"
                  style={{
                    fontStyle: "italic",
                    fontFamily: "Grenze Gotisch",
                    paddingBottom: "22px",
                  }}
                >
                  {membre.desc}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Team;
