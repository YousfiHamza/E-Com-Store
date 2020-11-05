import React from "react";
import { DirectoryMenuContainer } from "./directory.styles";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selector";

//Material UI
import Grid from "@material-ui/core/Grid";

import MenuItem from "../menu-item/menu-item-component";

const Directory = ({ sections }) => (
  <DirectoryMenuContainer>
    <Grid container justify="space-around">
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </Grid>
  </DirectoryMenuContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
