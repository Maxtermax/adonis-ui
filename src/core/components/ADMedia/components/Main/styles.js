import { withTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { FIGURE_VARIANTS } from "constants";

const figureTransform = ({ selected, theme, variant }) => {
  if (selected) return theme.transform.scale["80%"];
  if (variant === FIGURE_VARIANTS.MINI) return theme.transform.scale.tiny;
  return theme.transform.scale.none;
};

export const Figure = withTheme(styled.figure`
  align-items: center;
  background-color: ${({ theme, variant }) =>
    variant === FIGURE_VARIANTS.MINI
      ? theme.colors.white
      : theme.colors.transparent};
  transform: ${figureTransform};
  transition: ${({ theme }) => theme.transitions.smooth};
  margin: 0px;
  padding: 0px;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  overflow: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`);

export const Picture = styled.img`
  object-fit: contain;
`;
