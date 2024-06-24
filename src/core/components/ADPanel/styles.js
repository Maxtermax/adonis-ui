import styled from "@emotion/styled";

export const Panel = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme, variant }) =>
    variant === "flat" ? theme.colors.transparent : theme.colors.lightSilver};
  padding: ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ variant, theme }) =>
    variant === "flat" ? theme.spacing.none : theme.spacing.regular};
`;
