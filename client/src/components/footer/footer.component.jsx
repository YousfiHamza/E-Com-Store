import React from "react";
import { Link } from "react-router-dom";

//Material UI
import { Grid } from "@material-ui/core";

// Social Media
import PinterestIcon from "@material-ui/icons/Pinterest";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";

// Styling
import {
  FooterContainer,
  BrandContainer,
  SocialsContainer,
} from "./footer.styles";

import FooterLinks from "../footerLinks/footerLinks.component";

const Footer = () => {
  return (
    <FooterContainer
      container
      justify="space-between"
      alignItems="center"
      xs={12}
    >
      <Grid item xs={12} md={3}>
        <Link to="/YH-Clothing">
          <BrandContainer align="center" variant="h3">
            YousFitness - Clothing
          </BrandContainer>
        </Link>
      </Grid>
      <Grid
        item
        justify="center"
        xs={12}
        md={6}
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <FooterLinks />
      </Grid>
      <SocialsContainer container xs={12} md={3}>
        <Grid item justify="center" align="center" xs={3}>
          <a
            href="https://www.pinterest.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PinterestIcon />
          </a>
        </Grid>
        <Grid item justify="center" align="center" xs={2}>
          <a
            href="https://www.facebook.com/yousfihamza17"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FacebookIcon />
          </a>
        </Grid>
        <Grid item justify="center" align="center" xs={2}>
          <a
            href="https://www.instagram.com/yousfi_1st"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <InstagramIcon />
          </a>
        </Grid>
        <Grid item justify="center" align="center" xs={2}>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <TwitterIcon />
          </a>
        </Grid>
        <Grid item justify="center" align="center" xs={2}>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <YouTubeIcon />
          </a>
        </Grid>
      </SocialsContainer>
    </FooterContainer>
  );
};

export default Footer;
