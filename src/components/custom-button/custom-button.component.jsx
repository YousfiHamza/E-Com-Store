import React from "react";

import "./custom-button.styles.sass";

const CustomButton = ({
  children,
  isGoogleButton,
  isFacebookButton,
  ...otherProps
}) => (
  <button
    className={`
  ${isGoogleButton ? "google-sign-in" : ""} 
  ${isFacebookButton ? "faceook-sign-in" : ""}
  custom-button
  `}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
