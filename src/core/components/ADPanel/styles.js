import styled from "@emotion/styled";

export const Panel = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.lightSilver};
  padding: ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.spacing.regular};
`;
