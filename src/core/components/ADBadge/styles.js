import styled from "@emotion/styled";
import { SHAPES, DIMENSIONS } from "constants";

const radius = ({ theme, variant }) =>
  ({
    [SHAPES.rounded]: theme.border.radius[SHAPES.rounded],
    [SHAPES.sharp]: theme.border.radius[SHAPES.sharp],
    [SHAPES.circle]: theme.border.radius[SHAPES.circle],
  })[variant] ?? "";

const transform = ({ theme, size }) =>
  ({
    [DIMENSIONS.normal]: theme.transform.scale.normal,
    [DIMENSIONS.small]: theme.transform.scale.tiny,
    [DIMENSIONS.xs]: theme.transform.scale["50%"],
  })[size] ?? "";

export const Badge = styled.div`
  display: flex;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.contrast.lightSilver : theme.colors.lightSilver};
  border-radius: ${(props) => radius(props)};
  border: 1px solid
    ${({ active, theme }) =>
      active ? theme.colors.primary : theme.colors.transparent};
  color: ${({ active, theme }) =>
    active ? theme.colors.contrast.primary : theme.colors.primary};
  cursor: pointer;
  min-width: 30px;
  height: 30px;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  padding: ${(props) => props.theme.spacing.regular};
  transform: ${(props) => transform(props)};
  z-index: 1;
  transition: ${(props) => props.theme.transitions.smooth};
  &:hover {
    background-color: ${(props) => props.theme.colors.contrast.lightSilver};
    box-shadow: ${(props) => props.theme.elevation.regular}
      ${(props) => props.theme.colors.contrast.lightSilver};
    border: 1px solid ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.contrast.primary};
  }
  &:hover [class^="ad-text"] {
    color: ${(props) => props.theme.colors.contrast.primary};
  }
`;
