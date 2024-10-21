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
  display: grid;
  grid-template-columns: 100% 100% 100%;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  flex-direction: row;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  &::-webkit-scrollbar {
    display: none;
  }
  & .ad-media__picture--loading {
    position: absolute;
    right: calc(50% - 38px / 2);
  }
`);

export const Picture = styled.img`
  object-fit: contain;
  aspect-ratio: 1;
  width: 100%;
  height: auto;
  object-position: center;
  object-fit: contain;
  scroll-snap-align: start;
  visibility: hidden;
`;
