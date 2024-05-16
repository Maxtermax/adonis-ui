import styled from "@emotion/styled";
import { CARD_VARIANTS, DIMENSIONS, SHAPES } from "constants";

const { TEXT, OUTLINED, CONTAINED } = CARD_VARIANTS;

const borderColor = ({ variant, theme }) =>
  ({
    [CONTAINED]: theme.colors.primary,
    [OUTLINED]: theme.colors.primary,
  })[variant] ?? "";

const background = ({ variant, theme }) =>
  ({
    [OUTLINED]: theme.colors.transparent,
    [CONTAINED]: theme.colors.lightSilver,
  })[variant] ?? "";

const borderWidth = ({ variant, theme }) =>
  ({
    [CONTAINED]: theme.border.none,
    [OUTLINED]: theme.border.normal,
  })[variant] ?? "";

const boxShadow = ({ variant, theme, elevation = DIMENSIONS.regular }) =>
  ({
    [CONTAINED]: `${theme.elevation[DIMENSIONS[elevation]]} ${theme.colors.transparentBlack}`,
  })[variant] ?? "";

const color = ({ variant, theme }) =>
  ({
    [OUTLINED]: theme.colors.primary,
    [CONTAINED]: theme.colors.primary,
  })[variant] ?? "";

const radius = ({ variant, theme, shape = SHAPES.rounded }) =>
  ({
    [TEXT]: theme.border.radius[shape],
    [OUTLINED]: theme.border.radius[shape],
    [CONTAINED]: theme.border.radius[shape],
  })[variant] ?? "";

export const Card = styled.div`
  align-content: space-between;
  background-color: ${(props) => background(props)};
  border-width: ${(props) => borderWidth(props)};
  border-color: ${(props) => borderColor(props)};
  border-radius: ${(props) => radius(props)};
  border-style: solid;
  box-shadow: ${(props) => boxShadow(props)};
  color: ${(props) => color(props)};
  display: flex;
  flex-wrap: wrap;
  min-width: 200px;
  min-height: 200px;
  margin: 0px;
  transition: ${(props) => props.theme.transitions.quick};
  font-size: ${(props) => props.theme.fonts.sizes.normal};
  font-family: ${(props) => props.theme.fonts.primary.regular};
  justify-content: center;
  overflow: hidden;
  gap: ${(props) =>
    props.gap ? props.theme.spacing[props.gap] ?? props.gap : "0px"};
  &:hover {
    transform: ${(props) => props.theme.transform.scale.small};
  }
`;

export const Header = styled.div`
  width: 100%;
  position: relative;
`;

export const Footer = styled.div`
  width: 100%;
  position: relative;
`;

export const Content = styled.div`
  width: 100%;
  position: relative;
`;
