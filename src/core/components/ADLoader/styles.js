import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
`;

export const Spinner = styled.div`
  animation: ${rotation} linear infinite;
  animation-duration: ${({ theme }) => theme.timing.slow};
  border: 4px solid ${({ theme }) => theme.colors.primary};
  border-bottom-color: transparent;
  box-sizing: border-box;
  border-radius: 50%;
  display: inline-block;
  width: 40px;
  height: 40px;
`;
