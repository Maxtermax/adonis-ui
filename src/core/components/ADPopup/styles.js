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
  background: ${({ theme }) => theme.colors.contrast.primary};
  display: flex;
  justify-content: center;
  position: relative;
  top: 0px;
  left: 0px;
  min-width: 400px;
  min-height: 200px;
  border-radius: ${({ theme }) => theme.border.radius.rounded};
  padding: ${({ theme }) => theme.spacing.regular};
`;
