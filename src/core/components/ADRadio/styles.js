import styled from "@emotion/styled";

export const Container = styled.div`
  align-items: center;
  display: flex;
  margin: 0px;
  gap: ${({ theme }) => theme.spacing.regular};
  padding: ${({ theme }) => theme.spacing.regular};
`;

export const Radio = styled.button`
  background: ${({ theme, isChecked }) =>
    isChecked ? theme.colors.primary : theme.colors.transparent};
  border: ${({ theme, isChecked }) =>
      isChecked ? theme.spacing[6] : theme.spacing[3]}
    solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.border.radius.circle};
  cursor: pointer;
  width: 20px;
  height: 20px;
  padding: 0px;
  margin: 0px;
  transition: ${({ theme }) => theme.transitions.smooth};
  &:focus {
    background: ${({ theme, isChecked }) =>
      isChecked ? theme.colors.primary : theme.colors.transparent};
  }
  &:hover {
    background: ${({ theme, isChecked }) =>
      isChecked ? theme.colors.primary : theme.colors.transparent};
  }
`;

export const Input = styled.input`
  visibility: hidden;
  width: 0px;
  height: 0px;
  position: absolute;
`;

export const Label = styled.label`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
`;
