import { withTheme } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = withTheme(styled.div`
  align-items: start;
  align-content: space-between;
  position: relative;
  display: grid;
  flex-direction: column;
  justify-content: space-between;
  transtion: ${({ theme }) => theme.transitions.smooth};
  width 100%;
  height: 100%;
  gap: ${({ theme }) => theme.spacing.calc(10)};
  @media screen and ${(props) => props.theme.devices.md} {
    margin-top: 0px;
  }|
  & .search-drawer {
    z-index: 1;
  }
`);
