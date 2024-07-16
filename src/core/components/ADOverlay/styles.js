import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const appear = (isOpen = false) => keyframes`
  0% {
    opacity: ${isOpen ? 1 : 0};
  }
  100% {
    opacity: ${isOpen ? 0 : 1};
  }
`;

export const Container = styled.div`
  align-items: center;
  animation: ${({ isOpen }) => appear(!isOpen)};
  animation-duration: ${({ theme }) => theme.timing.fast};
  animation-fill-mode: forwards;
  background: ${({ theme }) => theme.colors.semiTransparent};
  justify-content: center;
  position: fixed;
  z-index: ${({ isOpen }) => (isOpen ? 1000 : -1000)};
  visibility: ${({ defaultOpen }) => (defaultOpen ? "visible" : "hidden")};
  display: ${({ defaultOpen }) => (defaultOpen ? "flex" : "none")};
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  & > .ad-loader__spinner {
    border: 4px solid ${({ theme }) => theme.colors.contrast.primary};
    border-bottom-color: transparent;
  }
  & .ad-text-body {
    color: ${({ theme }) => theme.colors.contrast.primary};
  }
`;
