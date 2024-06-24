import styled from "@emotion/styled";

export const Container = styled.ol`
  align-items: center;
  display: flex;
  gap: ${({ theme }) => theme.spacing.low};
`;

export const TextWrapper = styled.li`
  align-items: center;
  display: flex;
  & .ad-button {
    border: none;
    background: transparent;
    padding: 0px;
    margin: 0px;
  }
`;
