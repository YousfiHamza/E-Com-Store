import React from "react";

//Material UI
import { Typography, Grid } from "@material-ui/core";
import {
  LocalShippingTwoTone,
  ChatBubbleTwoTone,
  MonetizationOnTwoTone,
} from "@material-ui/icons";

import InfoArea from "../../../../components/InfoArea/infoArea.component";

import Background1 from "../../../../assets/images/backgrounds/wave_1.gif";

const Details = () => {
  return (
    <Grid
      container
      justify="space-around"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(0,212,255,0.33) 50%, rgba(255,255,255,1) 100%)",
      }}
    >
      <Grid Item xs={10} md={6}>
        <Typography
          variant="h2"
          align="center"
          style={{
            fontFamily: "lobster",
            backgroundImage: "url(" + Background1 + ")",
            backgroundSize: "50% ",
            backgroundRepeat: "no-repeat",
            marginBottom: "44px",
            textShadow: "5px 5px 10px cyan, 5px 5px 10px blue",
          }}
          data-aos="fade-down"
        >
          Let's talk Clothes
        </Typography>
        <Typography
          data-aos="fade-down"
          align="center"
          style={{
            color: "GrayText",
            fontStyle: "italic",
            fontFamily: "Grenze Gotisch",
            fontSize: "22px",
          }}
        >
          It's in this paragraph were we can write more details about Our
          Yousfitness Brand's products. Keep you user engaged by providing
          meaningful information. Remember that by this time, the user is
          curious, otherwise he wouldn't scroll to get here. We're alse thinking
          about adding a CTA ( call to action ) button !
        </Typography>
      </Grid>

      <Grid
        container
        xs={11}
        justify="space-around"
        style={{ marginBottom: "55px" }}
      >
        <Grid item xs={12} md={4} data-aos="fade-right">
          <InfoArea
            title="The Fastest Shipping"
            description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
            icon={LocalShippingTwoTone}
            iconColor="danger"
            shadow="red"
            vertical
          />
        </Grid>

        <Grid item xs={12} md={4} data-aos="fade-up">
          <InfoArea
            title="The Best Customer Service"
            description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
            icon={ChatBubbleTwoTone}
            iconColor="info"
            shadow="cyan"
            vertical
          />
        </Grid>

        <Grid item xs={12} md={4} data-aos="fade-left">
          <InfoArea
            title="The Lowest Prices"
            description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
            icon={MonetizationOnTwoTone}
            iconColor="success"
            shadow="green"
            vertical
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Details;
