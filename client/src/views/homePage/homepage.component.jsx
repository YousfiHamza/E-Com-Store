import React, { Fragment } from "react";

// Sections Components
import Parallax from "../../components/parallax/parallax.component";
import Directory from "../../components/directory/directory.component";
import Details from "./sections/details/details.component";
import Team from "./sections/team/team.component";
import Sponsored from "./sections/sponsored/sponsored.component";

const HomePage = () => (
  <Fragment>
    <Parallax filter image="home" />
    <Directory />
    <Details />
    <Sponsored />
    <Team />
  </Fragment>
);
export default HomePage;
