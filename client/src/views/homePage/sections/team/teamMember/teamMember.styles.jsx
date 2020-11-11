import styled from "styled-components";

import { Typography, Grid } from "@material-ui/core";

export const MemberContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 22px;
  margin-top: 44px;
  border-radius: 55px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.33) 33%,
    rgba(0, 212, 255, 0.66) 66%,
    rgba(0, 9, 121, 1) 100%
  );
`;

export const MemberName = styled(Typography)`
  font-family: lobster;
  font-size: 26px;
  font-weight: bold;
  color: darkblue;
`;

export const MemberTitle = styled(Typography)`
  font-family: Arial;
  font-size: 18px;
  color: gray;
`;

export const MemberDescription = styled(Typography)`
  font-style: italic;
  font-family: Grenze Gotisch;
  padding-bottom: 22px;
`;
