import styled from "@emotion/styled";

export const Content = styled.section`
  display: flex;
  border-radius: ${({ theme }) => theme.spacing.regular};
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.regular};
  padding: ${({ theme }) => theme.spacing.medium};
  width: 100%;
`;

export const Container = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.colors.transparent};
  border-radius: ${({ theme }) => theme.spacing.regular};
  border: 1px solid ${({ theme }) => theme.colors.lightSilver};
  display: flex;
  gap: ${({ theme }) => theme.spacing.regular};
  padding: ${({ theme }) => theme.spacing.medium};
  transition: ${({ theme }) => theme.transitions.smooth};
  &:hover {
    background: ${({ theme }) => theme.colors.grey};
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const Color = styled.label`
  display: flex;
  & input[type="color"] {
    visibility: hidden;
    width: 0px;
    height: 0px;
  }
`;

export const PlaceHolder = styled.div`
  background-color: ${({ color }) => color};
  border-radius: ${({ theme }) => theme.border.radius.semiRounded};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  display: flex;
  width: 20px;
  height: 20px;
  transition: ${({ theme }) => theme.transitions.quick};
  &:hover {
    transform: ${({ theme }) => theme.transform.scale.slightly};
  }
`;
