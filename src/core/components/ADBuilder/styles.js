import styled from "@emotion/styled";

export const Container = styled.div``;

export const ColorsContent = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.regular};
  padding: ${({ theme }) => theme.spacing.medium};
`;

export const InputContainer = styled.div`
  align-items: center;
  display: flex;
  gap: ${({ theme }) => theme.spacing.regular};
`;
