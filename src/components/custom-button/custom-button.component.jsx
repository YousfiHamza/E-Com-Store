import React from "react";

import "./custom-button.styles.sass";

const CustomButton = ({
  children,
  inverted,
  isGoogleButton,
  isFacebookButton,
  ...otherProps
}) => (
  <button
    className={`
  ${isGoogleButton ? "google-sign-in" : ""} 
  ${isFacebookButton ? "faceook-sign-in" : ""}
  ${inverted ? "inverted" : ""} 
  custom-button
  `}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
