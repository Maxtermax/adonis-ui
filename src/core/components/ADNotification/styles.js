import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const colorFactory = (theme, variant) =>
  ({
    primary: theme.colors.primary,
    success: theme.colors.success,
    warning: theme.colors.warning,
    error: theme.colors.error,
  })[variant];

const bgVariantFactory = (theme, variant) =>
  ({
    error: theme.colors.softRed,
    success: theme.colors.softSuccess,
    primary: theme.colors.silver,
    warning: theme.colors.softWarning,
  })[variant];

const animationTopFactory = (reverse = false) => keyframes`
  0% {
    opacity: ${reverse ? 1 : 0};
    top: ${reverse ? "4%" : "-100%"};
  }
  100% {
    opacity: ${reverse ? 0 : 1};
    top: ${reverse ? "-100%" : "4%"};
  }
`;

const animationBottomFactory = (reverse = false) => keyframes`
  0% {
    opacity: ${reverse ? 1 : 0};
    bottom: ${reverse ? "4%" : "-100%"};
  }
  100% {
    opacity: ${reverse ? 0 : 1};
    bottom: ${reverse ? "-100%" : "4%"};
  }
`;

const animationLeftFactory = (reverse = false) => keyframes`
  0% {
    opacity: ${reverse ? 1 : 0};
    left: ${reverse ? "4%" : "-100%"};
    top: 4%;
  }
  100% {
    opacity: ${reverse ? 0 : 1};
    left: ${reverse ? "-100%" : "4%"};
    top: 4%;
  }
`;

const animationRightFactory = (reverse = false) => keyframes`
  0% {
    opacity: ${reverse ? 1 : 0};
    right: ${reverse ? "4%" : "-100%"};
    top: 4%;
  }
  100% {
    opacity: ${reverse ? 0 : 1};
    right: ${reverse ? "-100%" : "4%"};
    top: 4%;
  }
`;

const animationMap = {
  top: animationTopFactory(),
  bottom: animationBottomFactory(),
  left: animationLeftFactory(),
  right: animationRightFactory(),
};

const animationDiscardMap = {
  top: animationTopFactory(true),
  bottom: animationBottomFactory(true),
  left: animationLeftFactory(true),
  right: animationRightFactory(true),
};

export const Container = styled.div`
  align-items: center;
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
  transition: ${({ theme }) => theme.transitions.smooth};
  &:hover {
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
  justify-content: center;
  width: 60px;
  height: 100%;
`;

export const Wrapper = styled.div`
  display: inline;
  & .ad-notification {
    height: 50px;
    &:hover {
      background: ${({ theme, variant }) => bgVariantFactory(theme, variant)};
    }
  }
  & .ad-notification-visible {
    visibility: visible;
  }
  & .ad-notification-hidden {
    visibility: hidden;
  }
  & .ad-notification-open {
    animation: ${({ direction }) => animationMap[direction]};
    animation-duration: ${({ theme }) => theme.timing.smooth};
    animation-fill-mode: forwards;
  }
  & .ad-notification__icon {
    color: ${({ variant, theme }) => colorFactory(theme, variant)};
  }
  & .ad-notification {
    border-color: ${({ variant, theme }) =>
      colorFactory(theme, variant)};
  }
  & .ad-notification__content .ad-text {
    color: ${({ variant, theme }) => colorFactory(theme, variant)};
  }
  & .ad-notification-discard {
    animation: ${({ direction }) => animationDiscardMap[direction]};
    animation-duration: ${({ theme }) => theme.timing.smooth};
    animation-fill-mode: forwards;
  }
`;
