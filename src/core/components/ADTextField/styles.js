import styled from "@emotion/styled";

export const Container = styled.div`
  align-items: center;
  display: flex;
  min-width: 300px;
  flex-direction: row;
  justify-content: center;
  position: relative;
`;

export const Input = styled.input`
  padding: ${({ theme }) => theme.spacing.low};
`;

export const Label = styled.label`
`;

export const Icon = styled.div`
`;



