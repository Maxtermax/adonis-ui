import { withTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { animations } from "ADProvider";

export const Wrapper = withTheme(styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.calc(2.1)};
  align-items: center;
  justify-content: space-around;
  height: 20px;
  position: relative;
  max-width: 130px;
  z-index: 1;
  transition: ${({ theme }) => theme.transitions.smooth};
  &:hover {
    transform: ${({ theme }) => theme.transform.scale.calc(1.1)};
  }
  & .ad-slides__indicator-button {
    border-radius: 100%;
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};
    min-width: 30px;
    width: 30px;
    height: 30px;
    padding: 2px;
    z-index: 2;
`);

export const Container = withTheme(styled.div`
  align-items: center;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-evenly;
  padding: ${({ theme }) => theme.spacing.calc(0.5)};
  width: 90px;
  height: 20px;
  transition: ${({ theme }) => theme.transitions.smooth};
  &:hover {
    background: ${({ theme }) => theme.colors.white};
  }
  & .ad-categories-indicator-selected {
    opacity: 1;
  }
`);

export const Indicator = withTheme(styled.div`
  background: ${({ theme }) => theme.colors.transparentBlack};
  border-radius: 40px;
  cursor: pointer;
  display: flex;
  opacity: ${({ isSelected }) => (isSelected ? 1 : 0.5)};
  transition: ${({ theme }) => theme.transitions.smooth};
  position: relative;
  overflow: hidden;
  width: ${({ isSelected }) => (isSelected ? "40px" : "8px")};
  height: 8px;
  &:before {
    content: " ";
    background: ${({ theme }) => theme.colors.primary};
    animation-name: ${({ isSelected }) =>
      isSelected ? animations.growWidth : ""};
    animation-timing-function: ${({ theme }) => theme.animationFunctions.easy};
    animation-duration: ${({ duration = "4000ms" }) => duration};
    animation-fill-mode: forwards;
    animation-play-state: ${({ isPaused }) =>
      isPaused ? "paused" : "running"};
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
  }
`);
