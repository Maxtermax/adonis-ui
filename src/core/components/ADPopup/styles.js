import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const appear = (theme) => keyframes`
  0% {
    opacity: 0;
    transform: ${theme.transform.scale.tiny};
  }
  100% {
    opacity: 1;
    transform: ${theme.transform.scale.none};
  }
`;

export const Container = styled.div`
  align-items: center;
  animation: ${({ theme }) => appear(theme)};
  animation-fill-mode: forwards;
  animation-duration: ${({ theme }) => theme.timing.fast};
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  top: 0px;
  left: 0px;
  min-width: 280px;
  min-height: 200px;
  border-radius: ${({ theme }) => theme.border.radius.rounded};
  padding: ${({ theme }) => theme.spacing.regular};
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  & .ad-popup__btn-close:disabled {
    & svg {
      opacity: 0.5;
    }
  }
  & > .ad-panel {
    align-items: center;
    display: flex;
    padding: 0px;
    padding-right: ${({ theme }) => theme.spacing.regular};
    padding-left: ${({ theme }) => theme.spacing.regular};
    padding-top: ${({ theme }) => theme.spacing.regular};
    width: 100%;
    justify-content: space-between;
  }
`;
