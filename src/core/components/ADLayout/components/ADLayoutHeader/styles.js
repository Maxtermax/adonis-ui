import { withTheme } from "@emotion/react";
import styled from "@emotion/styled";

export const Header = withTheme(styled.header`
  align-items: center;
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  color: ${({ theme }) => theme.colors.contrast.primary};
  justify-content: space-between;
  margin: 0px auto;
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0px;
  & > .ad-grid {
    width: ${({ theme }) => `calc(100% - ${theme.spacing.calc(14)})`};
    margin: 0px auto;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 100px;
    & > .ad-grid {
      width: ${({ theme }) => `calc(100% - ${theme.spacing.calc(0)})`};
    }
  }
  & .ad-text-subtitle,
  .ad-text-heading {
    color: ${({ theme }) => theme.colors.contrast.primary};
    text-align: center;
  }
`);

export const Logo = styled.div`
  background-size: 200px;
  background-repeat: no-repeat;
  background-position: center center;
  width: 200px;
  height: 40px;
  transform: scale(2);
  position: relative;
  top: -4px;
`;

export const Icon = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
`;

export const List = styled.ul`
  display: flex;
  padding: 0px;
  list-style-type: none;
  margin: 0;
  padding: 0;
  justify-content: space-evenly;
`;

export const HeaderContainer = styled.div`
  z-index: 2;
  .hidden {
    display: none;
  }
`;
