import React from "react";

//Material UI
import { Grid } from "@material-ui/core";

import { OUR_TEAM } from "./dataTeam.js";

import { TeamContainer, TeamTitle, TeamDescription } from "./team.styles";

import TeamMember from "./teamMember/teamMember.component";

const Team = () => {
  return (
    <TeamContainer container justify="space-around">
      <Grid Item xs={10} md={8}>
        <TeamTitle variant="h2" align="center" data-aos="fade-up">
          The T.E.A.M
        </TeamTitle>
        <TeamDescription align="center" data-aos="fade-up">
          Regardless of what an employee’s role is, at some point they will have
          to work with other people at the company – whether that’s a colleague,
          customer or other stakeholder.
          <br />
          Team spirit is an attitude that enables people to work well together.
          It’s about camaraderie, cooperation and collaboration between
          different members of the organization.
        </TeamDescription>
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
          <TeamMember key={membre.id} membre={membre} />
        ))}
      </Grid>
    </TeamContainer>
  );
};

export default Team;
