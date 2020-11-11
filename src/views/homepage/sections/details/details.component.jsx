import React from "react";

//Material UI
import { Grid } from "@material-ui/core";
import {
  LocalShippingTwoTone,
  ChatBubbleTwoTone,
  MonetizationOnTwoTone,
} from "@material-ui/icons";

import { TitleComponent, DescriptionComponent } from "./details.styles";

import InfoArea from "../../../../components/InfoArea/infoArea.component";

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
        <TitleComponent variant="h2" align="center" data-aos="fade-down">
          Let's talk Clothes
        </TitleComponent>
        <DescriptionComponent data-aos="fade-down" align="center">
          It's in this paragraph were we can write more details about Our
          Yousfitness Brand's products. Keep you user engaged by providing
          meaningful information. Remember that by this time, the user is
          curious, otherwise he wouldn't scroll to get here. We're alse thinking
          about adding a CTA ( call to action ) button !
        </DescriptionComponent>
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
