import { withTheme } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = withTheme(styled.div`
  align-items: center;
  transtion: ${({ theme }) => theme.transitions.smooth};
  width 100%;
  height: 100%;
  top: 80px;
  position: relative;
  display: flex;
  justify-content: center;
  & .search-drawer {
    z-index: 1;
  }
`);