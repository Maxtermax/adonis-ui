import { withTheme } from "@emotion/react";
import styled from "@emotion/styled";

export const ContentWrapper = withTheme(styled.div`
  width: 100%;
  height: 100%;
  & .ad-layout-search__panel {
    align-items: center;
    margin: 0px auto;
    width: calc(100% - ${({ theme }) => theme.spacing.calc(7)});
    height: calc(100% - ${({ theme }) => theme.spacing.calc(7)});
    display: flex;
    justify-content: center;
  }
`);
