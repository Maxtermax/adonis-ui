import { withTheme } from "@emotion/react";
import styled from "@emotion/styled";

export const Previews = withTheme(styled.div`
  position: absolute;
  top: 15px;
  left: 5px;
  transition: ${(props) => props.theme.transitions.smooth};
  z-index: 1;
  figure {
    display: flex;
    border: 1px solid ${(props) => props.theme.colors.primary};
    border-radius: ${({ theme }) => theme.border.radius.rounded};
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
`);

export const Content = withTheme(styled.div`
  background-color: ${(props) => props.theme.colors.white};
  cursor: zoom-in;
  display: block;
  height: 325px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  overflow: hidden;
  gap: ${(props) => props.theme.spacing.medium};
  @media screen and ${(props) => props.theme.devices.sm} {
    padding: 0px;
  }
  &:hover {
    border: 3px solid ${(props) => props.theme.colors.primary};
  }
  &:hover .previews {
    height: 70px;
  }
  &:hover .ad-media__figure {
    transform: ${({ theme }) => theme.transform.scale.calc(1.1)};
  }
`);

export const Discount = withTheme(styled.div`
  border-width: 40px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.red}
    ${({ theme }) => theme.colors.red} transparent transparent;
  position: absolute;
  right: 0px;
  top: 0px;
  width: 0px;
  height: 0px;
  z-index: 1;
  & .ad-text {
    color: ${({ theme }) => theme.colors.white};
    position: relative;
    bottom: 25px;
    left: -7px;
    font-size: 18px;
  }
`);
