import { withTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { TEXT_VARIANTS } from "constants";

const { TEXT, TITLE, LABEL, SUBTITLE, HEADING, FANCY } = TEXT_VARIANTS;

const fontSize = ({ variant, theme }) =>
  ({
    [TEXT]: theme.fonts.sizes.medium,
    [HEADING]: theme.fonts.sizes.big,
    [TITLE]: theme.fonts.sizes.big,
    [SUBTITLE]: theme.fonts.sizes.small,
    [LABEL]: theme.fonts.sizes.small,
    [FANCY]: theme.fonts.sizes.big,
  })[variant] ?? "";

const fontFamily = ({ variant, theme }) =>
  ({
    [TEXT]: theme.fonts.primary.medium,
    [HEADING]: theme.fonts.primary.bold,
    [TITLE]: theme.fonts.primary.bold,
    [SUBTITLE]: theme.fonts.primary.light,
    [LABEL]: theme.fonts.primary.light,
    [FANCY]: theme.fonts.primary.fancy,
  })[variant] ?? "";

export const Anchor = withTheme(styled.a`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${(props) => fontSize(props)};
  font-family: ${(props) => fontFamily(props)};
  padding: 0px;
  margin: 0px;
  line-height: 1.3;
  text-decoration: ${({ lineThrough }) =>
    lineThrough ? "line-through" : "none"};
  text-transform: ${({ textTransform }) => textTransform ?? "none"};
  ${({ sx = {} }) => ({ ...sx })};
`);

export const Text = withTheme(styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${(props) => fontSize(props)};
  font-family: ${(props) => fontFamily(props)};
  padding: 0px;
  margin: 0px;
  line-height: 1.3;
  text-decoration: ${({ lineThrough }) =>
    lineThrough ? "line-through" : "none"};
  text-transform: ${({ textTransform }) => textTransform ?? "none"};
  text-overflow: ellipsis;
  overflow: hidden;
  ${({ sx = {} }) => ({ ...sx })};
`);

export const Fancy = withTheme(styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${(props) => fontSize(props)};
  font-family: ${(props) => fontFamily(props)};
  padding: 0px;
  margin: 0px;
  line-height: 1.3;
  text-transform: ${({ textTransform }) => textTransform ?? "none"};
  text-decoration: ${({ lineThrough }) =>
    lineThrough ? "line-through" : "none"};
  ${({ sx = {} }) => ({ ...sx })};
`);

export const Label = withTheme(styled.label`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${(props) => fontSize(props)};
  font-family: ${(props) => fontFamily(props)};
  padding: 0px;
  margin: 0px;
  line-height: 1.3;
  text-transform: ${({ textTransform }) => textTransform ?? "none"};
  text-decoration: ${({ lineThrough }) =>
    lineThrough ? "line-through" : "none"};
  ${({ sx = {} }) => ({ ...sx })};
`);

export const Heading = withTheme(styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${(props) => fontSize(props)};
  font-family: ${(props) => fontFamily(props)};
  padding: 0px;
  margin: 0px;
  line-height: 1.3;
  text-transform: ${({ textTransform }) => textTransform ?? "none"};
  text-decoration: ${({ lineThrough }) =>
    lineThrough ? "line-through" : "none"};
  ${({ sx = {} }) => ({ ...sx })};
`);

export const Title = withTheme(styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${(props) => fontSize(props)};
  font-family: ${(props) => fontFamily(props)};
  padding: 0px;
  margin: 0px;
  line-height: 1.3;
  text-transform: ${({ textTransform }) => textTransform ?? "none"};
  text-decoration: ${({ lineThrough }) =>
    lineThrough ? "line-through" : "none"};
  ${({ sx = {} }) => ({ ...sx })};
`);

export const SubTitle = withTheme(styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${(props) => fontSize(props)};
  font-family: ${(props) => fontFamily(props)};
  padding: 0px;
  margin: 0px;
  line-height: 1.3;
  text-transform: ${({ textTransform }) => textTransform ?? "none"};
  text-decoration: ${({ lineThrough }) =>
    lineThrough ? "line-through" : "none"};
  ${({ sx = {} }) => ({ ...sx })};
`);
