import { keyframes, withTheme } from "@emotion/react";
import styled from "@emotion/styled";

export const variants = {
  fullscreen: "fullscreen",
};

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

const styleVariants = (variant = "") =>
  ({
    [variants.fullscreen]: {
      width: "100dvw",
      height: "100dvh",
      position: "fixed",
    },
  })[variant];

export const Container = withTheme(styled.div`
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
  width: ${({ width = "auto", variant = "" }) =>
    styleVariants(variant)?.width || width};
  height: ${({ height = "auto", variant = "" }) =>
    styleVariants(variant)?.height || height};
  border-radius: ${({ theme, variant = "" }) =>
    variant === variants.fullscreen ? "none" : theme.border.radius.rounded};
  position: ${({ variant = "" }) =>
    styleVariants(variant)?.position || "relative"};
  ${({ sx = {} }) => ({...sx})}
`);

export const Header = withTheme(styled.header`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.calc(2)};
  padding-left: 0px;
  padding-right: 0px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  & .ad-popup__title {
    width: 100%;
  }
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
`);
