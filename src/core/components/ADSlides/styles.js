import { withTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { animations } from "ADProvider";

export const Container = withTheme(styled.div`
  display: flex;
  position: relative;
  margin: 0px auto;
  width: 100%;
  height: 100%;
  min-height: 500px;
  min-width: 400px;
`);

export const IndicatorWrapper = withTheme(styled.div`
  align-items: center;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.transparentWhite};
  display: flex;
  position: absolute;
  bottom: 15px;
  right: calc(50% - 45px);
  justify-content: space-evenly;
  padding: ${({ theme }) => theme.spacing.calc(0.5)};
  width: 90px;
  height: 20px;
  transition: ${({ theme }) => theme.transitions.smooth};
  &:hover {
    background: ${({ theme }) => theme.colors.white};
    transform: ${({ theme }) => theme.transform.scale.calc(1.15)};
  }
  & .ad-categories-indicator-selected {
    opacity: 1;
  }
`);

export const Indicator = withTheme(styled.div`
  background: ${({ theme }) => theme.colors.lightSilver};
  border-radius: 40px;
  cursor: pointer;
  display: flex;
  width: ${({ isSelected }) => (isSelected ? "40px" : "12px")};
  height: 8px;
  opacity: ${({ isSelected }) => (isSelected ? 1 : 0.5)};
  transition: ${({ theme }) => theme.transitions.smooth};
  position: relative;
  overflow: hidden;
  &:before {
    content: " ";
    background: ${({ theme }) => theme.colors.primary};
    animation-name: ${({ isSelected }) =>
      isSelected ? animations.growWidth : ""};
    animation-timing-function: ${({ theme }) => theme.animationFunctions.easy};
    animation-duration: 4000ms;
    animation-fill-mode: forwards;
    animation-play-state: running;
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
  }
`);

export const Item = withTheme(styled.div`
  align-items: center;
  background-image: url(${({ image = "" }) => image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  width: 0px;
  flex-grow: ${({ isSelected }) => (isSelected ? 1 : 0)};
  transition: ${({ theme }) => theme.transitions.smooth};
`);

export const Link = withTheme(styled.a`
  display: block;
  text-decoration: none;
  margin-bottom: 70px;
`);
