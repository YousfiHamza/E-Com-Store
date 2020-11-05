import React from "react";
import { Link } from "react-router-dom";

//Material UI
import { Typography, Grid } from "@material-ui/core";

// Social Media
import PinterestIcon from "@material-ui/icons/Pinterest";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

import FooterLinks from "../footerLinks/footerLinks.component";

import Background from "../../assets/images/backgrounds/wave_3.png";

const Footer = () => {
  return (
    <Grid
      container
      justify="space-between"
      alignItems="center"
      xs={12}
      style={{
        backgroundColor: "#00539c",
        backgroundImage: "url(" + Background + ")",
        backgroundSize: "100% 44px",
        backgroundRepeat: "no-repeat",
        paddingTop: "56px",
        color: "white",
      }}
    >
      <Grid item xs={11} md={3}>
        <Link to="/E-Com-Store">
          <Typography
            style={{
              color: "white",
              fontFamily: "lobster",
              margin: "33px",
              fontSize: "19px",
              textShadow: "5px 5px 10px blue, 5px 5px 10px cyan",
            }}
            align="center"
            variant="h3"
          >
            YousFitness - Clothing
          </Typography>
        </Link>
      </Grid>
      <Grid
        item
        justify="center"
        xs={11}
        md={6}
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <FooterLinks />
      </Grid>
      <Grid
        container
        xs={11}
        md={3}
        style={{
          margin: "22px 0",
        }}
      >
        <Grid item justify="center" align="center" xs={3}>
          <a
            href="https://www.pinterest.com/"
            target="_blank"
            style={{
              color: "white",
            }}
          >
            <PinterestIcon />
          </a>
        </Grid>
        <Grid item justify="center" align="center" xs={3}>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            style={{
              color: "white",
            }}
          >
            {" "}
            <FacebookIcon />
          </a>
        </Grid>
        <Grid item justify="center" align="center" xs={3}>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            style={{
              color: "white",
            }}
          >
            {" "}
            <InstagramIcon />
          </a>
        </Grid>
        <Grid item justify="center" align="center" xs={3}>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            style={{
              color: "white",
            }}
          >
            {" "}
            <TwitterIcon />
          </a>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
