import { withTheme } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = withTheme(styled.div`
  align-items: center;
  display: inline-flex;
  justify-content: center;
  min-height: 75px;
  width: 100%;
  ${({ sx = {} }) => ({ ...sx })};
`);
