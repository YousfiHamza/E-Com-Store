import React from "react";
import "./menu-item.styles.sass";

// HOC that helps us avoid prop drilling and gives us access to the props we need such as " Location , History ... "
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, history, match }) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${title}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
