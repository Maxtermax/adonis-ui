import styled from "@emotion/styled";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.medium};
  gap: ${({ theme }) => theme.spacing.regular};
  height: 100%;
`;

