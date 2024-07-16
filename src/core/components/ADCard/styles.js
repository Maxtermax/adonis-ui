import styled from "@emotion/styled";
import isPropValid from "@emotion/is-prop-valid";
import { CARD_VARIANTS, DIMENSIONS, SHAPES } from "constants";

const { TEXT, OUTLINED, CONTAINED } = CARD_VARIANTS;

const withTheme = (value, theme) =>
  typeof value === "function" ? value(theme) : value;

const borderColor = ({ variant, theme }) =>
  ({
    [CONTAINED]: theme.colors.primary,
    [OUTLINED]: theme.colors.primary,
  })[variant] ?? "";

const background = ({ variant, theme }) =>
  ({
    [OUTLINED]: theme.colors.transparent,
    [CONTAINED]: theme.colors.grey,
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

export const Card = styled("div", {
  shouldForwardProp: (prop) =>
    isPropValid(prop) &&
    !["alignContent", "variant", "height", "width"].includes(prop),
})`
  align-content: ${({ alignContent, theme }) =>
    withTheme(alignContent, theme) ?? "center"};
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
  justify-content: ${({ justifyContent, theme }) =>
    withTheme(justifyContent, theme)};
  overflow: hidden;
  width: ${({ fullWidth, width = "auto", theme }) =>
    fullWidth ? "100%" : withTheme(width, theme)};
  height: ${({ fullHeight, height = "auto", theme }) =>
    fullHeight ? "100%" : withTheme(height, theme)};
  gap: ${({ theme, gap }) => (gap ? theme.spacing[gap] ?? gap : "0px")};
  &:hover {
    transform: ${({ theme, noScaleOnHover, onHoverTransform }) =>
      noScaleOnHover
        ? "none"
        : onHoverTransform || theme.transform.scale.small};
  }
`;

export const Left = styled.div``;

export const Right = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.lightSilver};
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
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
