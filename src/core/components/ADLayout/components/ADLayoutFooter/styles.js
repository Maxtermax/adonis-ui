import { withTheme } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = withTheme(styled.ul`
  display: flex;
  padding: 0px;
  margin: 0px;
  height: 200px;
  background: ${({ theme }) => theme.colors.primary};
  margin-top: 20px;
  padding-bottom: 40px;
  padding-top: 20px;
`);

export const Item = withTheme(styled.li`
  display: flex;
  flex-direction: column;
  & .ad-text {
    color: ${({ theme }) => theme.colors.contrast.primary};
    text-transform: uppercase;
    text-align: center;
  }
  & .ad-flex {
    margin-top: ${({ theme }) => theme.spacing.calc(4)};
    justify-content: space-evenly;
  }
  & a {
    color: ${({ theme }) => theme.colors.contrast.primary};
    text-align: center;
  }
`);
