import { withTheme } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = withTheme(styled.div`
  .ad-card {
    background-color: ${({ theme }) => theme.colors.smoke};
    border: 2px solid ${({ theme }) => theme.colors.smoke};
    gap: ${({ theme }) => theme.spacing.calc(1)};
    width: 100%;
    height: 370px;
    &:hover {
      border: 2px solid ${({ theme }) => theme.colors.primary};
    }
  }
`);
