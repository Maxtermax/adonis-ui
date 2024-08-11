import styled from "@emotion/styled";
import { DIRECTIONS } from "constants";

export const Container = styled.span`
  align-items: ${({ direction }) =>
    DIRECTIONS.RIGHT === direction || DIRECTIONS.LEFT === direction
      ? "center"
      : "normal"};
  display: flex;
  position: relative;
  justify-content: ${({ direction }) =>
    DIRECTIONS.TOP === direction || DIRECTIONS.BOTTOM === direction
      ? "center"
      : "normal"};
  &:hover .ad-tooltip__text {
    visibility: visible;
    opacity: 1;
  }
`;

const xPos = ({ direction, theme }) => {
  if (DIRECTIONS.RIGHT === direction) {
    return `left: calc(100% + ${theme.spacing.regular})`;
  }
  if (DIRECTIONS.LEFT === direction) {
    return `right: calc(100% + ${theme.spacing.regular})`;
  }
  if (DIRECTIONS.TOP === direction || DIRECTIONS.BOTTOM === direction) {
    return "";
  }
};

const yPos = ({ direction, theme }) => {
  if (DIRECTIONS.TOP === direction) {
    return `bottom: calc(100% + ${theme.spacing.regular})`;
  }
  if (DIRECTIONS.BOTTOM === direction) {
    return `top: calc(100% + ${theme.spacing.regular})`;
  }
  if (DIRECTIONS.RIGHT === direction || DIRECTIONS.LEFT === direction) {
    return "";
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
  border: 1ox solid ${({ theme, contrast }) =>
    contrast ? theme.colors.contrast.primary : theme.colors.primary};
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
  visibility: hidden;
  opacity: 0;
  & [class*="ad-text"] {
    color: ${({ theme, contrast }) =>
      contrast ? theme.colors.primary : theme.colors.contrast.primary};
  }
  ${xPos};
  ${yPos};
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
