import styled from "@emotion/styled";
import { TEXT_VARIANTS } from "constants";

const { BODY, TITLE, SUBTITLE, HEADING } = TEXT_VARIANTS;

const fontSize = ({ variant, theme }) =>
  ({
    [BODY]: theme.fonts.sizes.medium,
    [HEADING]: theme.fonts.sizes.big,
    [TITLE]: theme.fonts.sizes.big,
    [SUBTITLE]: theme.fonts.sizes.small,
  })[variant] ?? "";

const fontFamily = ({ variant, theme }) =>
  ({
    [BODY]: theme.fonts.primary.medium,
    [HEADING]: theme.fonts.primary.bold,
    [TITLE]: theme.fonts.primary.bold,
    [SUBTITLE]: theme.fonts.primary.light,
  })[variant] ?? "";

export const Text = styled.p`
  font-size: ${(props) => fontSize(props)};
  font-family: ${(props) => fontFamily(props)};
  padding: 0px;
  margin: 0px;
`;

export const Heading = styled.h1`
  font-size: ${(props) => fontSize(props)};
  font-family: ${(props) => fontFamily(props)};
  padding: 0px;
  margin: 0px;
`;

export const Title = styled.span`
  font-size: ${(props) => fontSize(props)};
  font-family: ${(props) => fontFamily(props)};
  padding: 0px;
  margin: 0px;
`;

export const SubTitle = styled.span`
  font-size: ${(props) => fontSize(props)};
  font-family: ${(props) => fontFamily(props)};
  padding: 0px;
  margin: 0px;
`;
