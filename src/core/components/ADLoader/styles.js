import { keyframes, withTheme } from "@emotion/react";
import styled from "@emotion/styled";

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const bounce = keyframes`
  0% {
    margin-top: 0px;
    opacity: 0;
  }
  50% {
    opacity: 1;
    margin-top: 5px;
  }
 100% {
    margin-top: 0px;
    opacity: 0;
  }
`;

export const Container = withTheme(styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
  ${({ sx = {} }) => ({ ...sx })};
`);

export const Spinner = withTheme(styled.div`
  animation: ${rotation} linear infinite;
  animation-duration: ${({ theme }) => theme.timing.slow};
  border: 3px solid ${({ theme }) => theme.colors.primary};
  border-bottom-color: transparent;
  box-sizing: border-box;
  border-radius: 50%;
  display: inline-block;
  width: ${({ size = 1 }) => size * 40}px;
  height: ${({ size = 1 }) => size * 40}px;
`);

export const DotLoader = withTheme(styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.calc(1)};
  & .ad-loader__dot {
    background: ${({ theme }) => theme.colors.transparentBlack};
    border-radius: 100%;
    height: 10px;
    width: 10px;
    animation: ${bounce} infinite;
    animation-duration: ${({ theme }) => theme.timing.calc(0.8)};
    animation-fill-mode: forwards;
    animation-timing-function: ${({ theme }) => theme.animationFunctions.sweet};
  }
  .ad-loader__dot:nth-of-type(1) {
    animation-delay: ${({ theme }) => theme.timing.calc(0)};
  }
  .ad-loader__dot:nth-of-type(2) {
    animation-delay: ${({ theme }) => theme.timing.calc(0.4)};
  }
  .ad-loader__dot:nth-of-type(3) {
    animation-delay: ${({ theme }) => theme.timing.calc(0)};
  }
`);
