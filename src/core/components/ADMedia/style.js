import styled from "@emotion/styled";
import { FIGURE_VARIANTS } from "constants";

export const DiscountContent = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr;
  align-items: center;
  gap: 10px;
`;

export const Discount = styled.div`
  align-items: center;
  display: flex;
  position: relative;
  height: 20px;
  right: 0px;
  gap: ${({ theme }) => theme.spacing.low};
  & .discount-percentage {
    background: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.white};
    transform: ${({ theme }) => theme.transform.scale["90%"]};
  }
  & .ad-badge.discount-percentage:hover {
    background: ${({ theme }) => theme.colors.red};
  }
`;

export const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  gap: ${(props) => props.theme.spacing.regular};
  .ad-title,
  .ad-body {
    align-items: center;
    display: flex;
    height: 30px;
  }
`;

export const RightCol = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  padding-right: ${({ theme }) => theme.spacing.low};
  height: 100px;
  .ad-tooltip .ad-tooltip__text {
    background-color: ${({ theme }) => theme.colors.contrast.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
  .ad-button {
    transform: ${(props) => props.theme.transform.scale.mid};
    @media screen and ${(props) => props.theme.devices.sm} {
      position: relative;
      width: calc(100% - 40px);
      top: ${(props) => props.theme.spacing.regular};
      left: -17px;
    }
  }
  .ad-tooltip {
    @media screen and ${(props) => props.theme.devices.sm} {
      padding: 0px;
      margin: 0px;
      width: 100%;
      left: 20px;
    }
  }
  @media screen and ${(props) => props.theme.devices.sm} {
    height: 65px;
  }
`;

export const Media = styled.div`
  width: 350px;
  @media screen and ${(props) => props.theme.devices.sm} {
    width: 290px;
  }
`;

export const Footer = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.grey};
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.low};
  padding: ${(props) => props.theme.spacing.medium};
  transition: ${(props) => props.theme.transitions.smooth};
  &:hover {
    background-color: ${(props) => props.theme.colors.contrast.white};
    color: ${(props) => props.theme.colors.contrast.primary};
  }
  &:hover button {
    background-color: ${(props) => props.theme.colors.lightSilver};
  }
  &:hover button:hover {
    border: 1px solid;
  }
  &:hover .ad-badge {
    color: ${(props) => props.theme.colors.contrast.primary};
  }
  &:hover .ad-badge:hover {
    background-color: ${(props) => props.theme.colors.lightSilver};
    color: ${(props) => props.theme.colors.contrast.primary};
    border: 1px solid;
  }
`;

export const Content = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  cursor: zoom-in;
  display: block;
  height: 240px;
  gap: ${(props) => props.theme.spacing.medium};
  @media screen and ${(props) => props.theme.devices.sm} {
    padding: 0px;
  }
  .main-picture {
    position: relative;
  }
  .main-picture img {
    transform: ${(props) => props.theme.transform.scale.six};
    transition: ${(props) => props.theme.transitions.quick};
    aspect-ratio: 16 / 9;
    width: 100%;
    height: auto;
    object-position: left top;
    object-fit: cover;
    &:hover {
      transform: ${(props) => props.theme.transform.scale.extra};
    }
  }
  &:hover .previews {
    height: 70px;
  }
`;

export const Image = styled.img`
  object-fit: contain;
  background-color: ${({ theme }) => theme.colors.white};
  opacity: ${({ theme, selected = false }) =>
    selected ? theme.opacity.visible : theme.opacity.middle} !important;
`;

export const Picture = styled.img`
  object-fit: contain;
`;

export const Previews = styled.div`
  position: absolute;
  top: ${(props) => props.theme.spacing.low};
  left: ${(props) => props.theme.spacing.low};
  transition: ${(props) => props.theme.transitions.smooth};
  z-index: 1;
  figure {
    display: flex;
    border: 1px solid ${(props) => props.theme.colors.primary};
    border-radius: ${(props) => props.theme.border.radius.rounded};
    justify-content: space-evenly;
    gap: ${(props) => props.theme.spacing.high};
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${(props) => props.theme.spacing.low};
    position: relative;
  }
  figure img {
    cursor: pointer;
    transition: ${(props) => props.theme.transitions.smooth};
    opacity: ${(props) => props.theme.opacity.middle};
  }
  figure img:hover {
    opacity: ${(props) => props.theme.opacity.visible};
  }
`;

const figureTransform = ({ selected, theme, variant }) => {
  if (selected) return theme.transform.scale["80%"];
  if (variant === FIGURE_VARIANTS.MINI) return theme.transform.scale.tiny;
  return theme.transform.scale.none;
};

export const Figure = styled.figure`
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
`;

export const Header = styled.div`
  display: flex;
  position: absolute;
  right: ${({ theme }) => theme.spacing.regular};
  top: -${({ theme }) => theme.spacing.regular};
  & .ad-badge {
    background-color: ${({ theme }) => theme.colors.red};
    border: none;
  }
  & .ad-heading {
    padding-top: ${({ theme }) => theme.spacing.low};
  }
`;

export const Sizes = styled.div`
  align-items: center;
  display: flex;
  position: relative;
  left: -10px;
  top: -5px;
  justify-content: flex-start;
`;
