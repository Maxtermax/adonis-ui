import { withTheme } from "@emotion/react";
import styled from "@emotion/styled";

export const Divider = withTheme(styled.hr`
  background: ${({ theme }) => theme.colors.lightSilver};
  border: none;
  display: flex;
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 1px;
`);
