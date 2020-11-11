import React from "react";

//Material UI
import { Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const HomeButton = ({ content, startIcon, endIcon, color, to }) => {
  return (
    <Grid
      container
      justify="center"
      style={{
        margin: "22px",
      }}
    >
      <Link to={to}>
        <Button
          variant="contained"
          color={color}
          startIcon={startIcon}
          endIcon={endIcon}
        >
          {content}
        </Button>
      </Link>
    </Grid>
  );
};

export default HomeButton;
