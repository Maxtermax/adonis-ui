import styled from "@emotion/styled";

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  gap: ${({ theme }) => theme.spacing.regular};
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
  border-radius: ${({ theme }) => theme.border.radius.rounded};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  display: flex;
  width: 30px;
  height: 30px;
  transition: ${({ theme }) => theme.transitions.quick};
  &:hover {
    transform: ${({ theme }) => theme.transform.scale.slightly};
  }
`;
