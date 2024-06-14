import styled from "@emotion/styled";
import { TEXT_VARIANTS } from "constants";

const { TEXT, TITLE, SUBTITLE, HEADING } = TEXT_VARIANTS;

const fontSize = ({ variant, theme }) =>
  ({
    [TEXT]: theme.fonts.sizes.medium,
    [HEADING]: theme.fonts.sizes.big,
    [TITLE]: theme.fonts.sizes.big,
    [SUBTITLE]: theme.fonts.sizes.small,
  })[variant] ?? "";

const fontFamily = ({ variant, theme }) =>
  ({
    [TEXT]: theme.fonts.primary.medium,
    [HEADING]: theme.fonts.primary.bold,
    [TITLE]: theme.fonts.primary.bold,
    [SUBTITLE]: theme.fonts.primary.light,
  })[variant] ?? "";

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${(props) => fontSize(props)};
  font-family: ${(props) => fontFamily(props)};
  padding: 0px;
  margin: 0px;
  text-decoration: ${({ lineThrough }) =>
    lineThrough ? "line-through" : "none"};
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${(props) => fontSize(props)};
  font-family: ${(props) => fontFamily(props)};
  padding: 0px;
  margin: 0px;
  text-decoration: ${({ lineThrough }) =>
    lineThrough ? "line-through" : "none"};
`;

export const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${(props) => fontSize(props)};
  font-family: ${(props) => fontFamily(props)};
  padding: 0px;
  margin: 0px;
  text-decoration: ${({ lineThrough }) =>
    lineThrough ? "line-through" : "none"};
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${(props) => fontSize(props)};
  font-family: ${(props) => fontFamily(props)};
  padding: 0px;
  margin: 0px;
  text-decoration: ${({ lineThrough }) =>
    lineThrough ? "line-through" : "none"};
`;

export const SubTitle = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${(props) => fontSize(props)};
  font-family: ${(props) => fontFamily(props)};
  padding: 0px;
  margin: 0px;
  text-decoration: ${({ lineThrough }) =>
    lineThrough ? "line-through" : "none"};
`;
