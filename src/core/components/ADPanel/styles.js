import { withTheme } from "@emotion/react";
import styled from "@emotion/styled";

export const Panel = withTheme(styled.div`
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme, variant }) =>
    variant === "flat" ? theme.colors.transparent : theme.colors.lightSilver};
  padding: ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ variant, theme }) =>
    variant === "flat" ? theme.spacing.none : theme.spacing.regular};
  display: block;
  width: ${({ width }) => width ? width : "100%"};
`);
