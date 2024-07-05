import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const appear = keyframes`
  0% {
    opacity: 0;
    top: -100%;
  }
  100% {
    opacity: 1;
    top: 4%;
  }
`;

const discard = keyframes`
  0% {
    opacity: 1;
    top: 4%;
  }
  100% {
    opacity: 0;
    top: -100%;
  }
`;

export const Container = styled.div`
  align-items: center;
  animation: ${appear} ${({ theme }) => theme.timing.smooth};
  animation-fill-mode: forwards;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.border.radius.rounded};
  cursor: pointer;
  display: flex;
  min-height: 60px;
  min-width: 300px;
  flex-direction: row;
  justify-content: center;
  flex-direction: column;
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  position: fixed;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing.regular};
  padding-left: ${({ theme }) => theme.spacing.low};
  padding-right: ${({ theme }) => theme.spacing.low};
  transition: ${({ theme }) => theme.transitions.smooth};
  &:hover {
    background: #00000008;
    transform: ${({ theme }) => theme.transform.scale.small};
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Icon = styled.div`
  align-items: center;
  display: flex;
  padding: ${({ theme }) => theme.spacing.regular};
  width: 80px;
  height: 100%;
  justify-content: center;
`;

export const Actions = styled.div`
  display: flex;
  min-width: 80px;
  height: 100%;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.regular};
`;

export const Wrapper = styled.div`
  display: inline;
  & .ad-notification-discard {
    animation: ${discard} ${({ theme }) => theme.timing.mid};
    animation-fill-mode: forwards;
  }
`;
