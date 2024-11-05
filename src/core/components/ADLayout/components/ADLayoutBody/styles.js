import { withTheme } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = withTheme(styled.div`
  align-items: start;
  align-content: space-between;
  padding-bottom: ${({ theme }) => theme.spacing.calc(4)};
  position: relative;
  display: grid;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.calc(10)};
  transtion: ${({ theme }) => theme.transitions.smooth};
  width 100%;
  height: 100%;
  @media screen and ${(props) => props.theme.devices.md} {
    gap: ${({ theme }) => theme.spacing.calc(4)};
    padding-top: 0px;
  }
  & .search-drawer {
    z-index: 1;
  }
`);
