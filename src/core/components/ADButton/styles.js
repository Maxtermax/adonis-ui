import { withTheme } from '@emotion/react';
import styled from "@emotion/styled";
import { CARD_VARIANTS, DIMENSIONS } from "constants";

const { TEXT, OUTLINED, CONTAINED, SHARP } = CARD_VARIANTS;

const borderColor = ({ variant, theme }) =>
  ({
    [TEXT]: theme.colors.transparent,
    [CONTAINED]: theme.colors.primary,
    [OUTLINED]: theme.colors.primary,
  })[variant] ?? "";

const background = ({ variant, theme }) =>
  ({
    [TEXT]: theme.colors.transparent,
    [OUTLINED]: theme.colors.transparent,
    [CONTAINED]: theme.colors.primary,
    [SHARP]: theme.colors.primary,
  })[variant] ?? "";

const borderWidth = ({ variant, theme }) =>
  ({
    [TEXT]: theme.border.none,
    [CONTAINED]: theme.border.none,
    [OUTLINED]: theme.border.normal,
    [SHARP]: theme.border.normal,
  })[variant] ?? "";

const boxShadow = ({ variant, theme }) =>
  ({
    [CONTAINED]: `0px 4px 8px 0px ${theme.colors.transparentBlack}`,
  })[variant] ?? "";

const color = ({ variant, theme }) =>
  ({
    [TEXT]: theme.colors.primary,
    [OUTLINED]: theme.colors.primary,
    [CONTAINED]: theme.colors.contrast.primary,
    [SHARP]: theme.colors.contrast.primary,
  })[variant] ?? "";

const radius = ({ variant, theme }) =>
  ({
    [TEXT]: theme.border.radius.rounded,
    [OUTLINED]: theme.border.radius.rounded,
    [CONTAINED]: theme.border.radius.rounded,
    [SHARP]: theme.border.radius.sharp,
  })[variant] ?? "";

export const Button = withTheme(styled.button`
  align-items: center;
  background-color: ${(props) => background(props)};
  border-width: ${(props) => borderWidth(props)};
  border-color: ${(props) => borderColor(props)};
  border-radius: ${(props) => radius(props)};
  color: ${(props) => color(props)};
  cursor: pointer;
  display: flex;
  min-width: 50px;
  height: 40px;
  margin: 0px;
  padding: ${(props) => props.theme.spacing[DIMENSIONS.regular]};
  transition: ${(props) => props.theme.transitions.smooth};
  font-size: ${(props) => props.theme.fonts.sizes.normal};
  font-family: ${(props) => props.theme.fonts.primary.regular};
  justify-content: center;
  &:hover {
    box-shadow: ${(props) => boxShadow(props)};
    transform: ${({ theme, noScaleOnHover }) =>
      noScaleOnHover
        ? theme.transform.scale.none
        : theme.transform.scale.slightly};
  }
`);
