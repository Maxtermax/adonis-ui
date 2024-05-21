import styled from "@emotion/styled";
import { DIRECTIONS } from "constants";

export const Content = styled.span`
  position: relative;
  &:hover > .ad-tooltip__text {
    visibility: visible;
    opacity: 1;
  }
`;

const xPos = ({ direction }) => {
  if (DIRECTIONS.RIGHT === direction) {
    return "left: 105%";
  }
  if (DIRECTIONS.LEFT === direction) {
    return "right: 105%";
  }
};

const yPos = ({ direction, theme }) => {
  if (DIRECTIONS.TOP === direction) {
    return `bottom: calc(100% + ${theme.spacing.regular})`;
  }
  if (DIRECTIONS.BOTTOM === direction) {
    return "bottom: -100%";
  }
  if (DIRECTIONS.RIGHT === direction || DIRECTIONS.LEFT) {
    return "top: 0px";
  }
};

const arrowShape = ({ direction, theme, contrast }) => {
  const color = contrast ? theme.colors.contrast.primary : theme.colors.primary;
  if (DIRECTIONS.BOTTOM === direction) {
    return `transparent transparent ${color} transparent`;
  }
  if (DIRECTIONS.TOP === direction) {
    return `${color} transparent transparent transparent`;
  }
  if (DIRECTIONS.RIGHT === direction) {
    return `transparent ${color} transparent transparent`;
  }
  if (DIRECTIONS.LEFT === direction) {
    return `transparent transparent transparent ${color}`;
  }
};

const arrowYPos = ({ direction, theme }) => {
  if (DIRECTIONS.LEFT === direction || DIRECTIONS.RIGHT === direction) {
    return `top: calc(50% - ${theme.spacing.low})`;
  }
  if (DIRECTIONS.TOP === direction) {
    return `bottom: -${theme.spacing.regular}`;
  }
  if (DIRECTIONS.BOTTOM === direction) {
    return `top: -${theme.spacing.regular}`;
  }
};

const arrowXPos = ({ direction, theme }) => {
  if (DIRECTIONS.TOP === direction || DIRECTIONS.BOTTOM === direction) {
    return "left: 50%";
  }
  if (DIRECTIONS.LEFT === direction) {
    return `right: -${theme.spacing.regular}`;
  }
  if (DIRECTIONS.RIGHT === direction) {
    return `left: -${theme.spacing.low}`;
  }
};

export const Text = styled.span`
  background-color: ${({ theme, contrast }) =>
    contrast ? theme.colors.contrast.primary : theme.colors.primary};
  color: ${({ theme, contrast }) =>
    contrast ? theme.colors.primary : theme.colors.contrast.primary};
  text-align: center;
  border-radius: ${({ theme }) => theme.border.radius.rounded};
  padding: ${({ theme }) => theme.spacing.regular};
  position: absolute;
  z-index: 1;
  transition: all ${({ theme }) => theme.transitions.smooth};
  visibility: visible;
  opacity: 1;
  &::after {
    content: " ";
    position: absolute;
    ${arrowXPos};
    ${arrowYPos};
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: ${arrowShape};
  }
`;
