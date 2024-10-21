import { withTheme } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = withTheme(styled.div`
  & .ad-text {
    font-size: ${({ theme }) => theme.fonts.sizes.calc(2.8)};
    text-transform: uppercase;
  }
`);
