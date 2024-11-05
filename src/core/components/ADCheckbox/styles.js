import styled from "@emotion/styled";

export const Container = styled.button`
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  outline: none;
  flex-direction: row;
  margin: 0px;
  padding: 0px;
  gap: ${({ theme }) => theme.spacing.regular};
`;

export const Checkbox = styled.div`
  align-items: center;
  background: ${({ theme, checked }) =>
    checked ? theme.colors.primary : theme.colors.contrast.primary};
  border-radius: ${({ theme }) => theme.border.radius.semiRounded};
  border: 4px solid ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;
  margin: 0px;
  padding: 0px;
  width: 15px;
  height: 15px;
  transition: ${({ theme }) => theme.transitions.smooth};
  & svg {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const Input = styled.input`
  visibility: hidden;
  overflow: hidden;
  width: 0px;
  height: 0px;
`;
