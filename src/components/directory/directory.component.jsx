import React from "react";
import "./directory.styles.sass";

import MenuItem from "../menu-item/menu-item-component";

class Directory extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();

    this.state = {
      sections: [],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        Hello From Directory
        <MenuItem />
      </div>
    );
  }
}

export default Directory;
