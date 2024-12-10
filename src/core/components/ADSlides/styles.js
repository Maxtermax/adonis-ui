import { withTheme } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = withTheme(styled.div`
  display: flex;
  position: relative;
  margin: 0px auto;
  width: 100vw;
  height: 100%;
  max-height: 800px;
  min-width: 400px;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and ${({ theme }) => theme.devices.sm} {
    height: 500px;
  }
`);

export const Item = withTheme(styled.div`
  align-items: center;
  aspect-ratio: 16 / 9;
  background-image: url(${({ image = "" }) => image});
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  transition: ${({ theme }) => theme.transitions.smooth};
  scroll-snap-align: start;
  position: relative;
  @media screen and ${({ theme }) => theme.devices.sm} {
    aspect-ratio: 9 / 16;
    background-attachment: local;
  }
  & .ad-slides__item__button {
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.white};
    background: transparent;
    padding: ${({ theme }) => theme.spacing.calc(6)};
    width: 250px;
    position: relative;
    font-size: ${({ theme }) => theme.fonts.sizes.calc(1.5)};
    outline: none;
    z-index: 1;
    @media screen and ${({ theme }) => theme.devices.md} {
      top: -40px;
    }
    &:hover {
      background: ${({ theme }) => theme.colors.white};
      border: 1px solid ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  & .ad-slides__item__title {
    color: ${({ theme }) => theme.colors.white};
    position: relative;
    font-size: ${({ theme }) => theme.fonts.sizes.calc(7)};
    text-transform: uppercase;
    z-index: 1;
    text-align: center;
    @media screen and ${({ theme }) => theme.devices.md} {
      font-size: ${({ theme }) => theme.fonts.sizes.calc(3)};
    }
  }
  & .ad-slides__item__subtitle {
    color: ${({ theme }) => theme.colors.white};
    position: relative;
    font-size: ${({ theme }) => theme.fonts.sizes.calc(2.8)};
    text-transform: uppercase;
    z-index: 1;
    &::after {
      background: ${({ theme }) => theme.colors.white};
      bottom: -25px;
      content: " ";
      left: calc(50% - 20px / 2);
      width: 20px;
      height: 10px;
      position: absolute;
    }
    @media screen and ${({ theme }) => theme.devices.md} {
      font-size: ${({ theme }) => theme.fonts.sizes.calc(1.25)};
    }
  }
  position: relative;
  & .slide-background {
    background-color: ${({ theme }) => theme.colors.transparentBlack};
    top: 0px;
    left: 0px;
    position: absolute;
    width: 100%;
    height: 100%;
  }
`);

export const Link = withTheme(styled.a`
  display: block;
  text-decoration: none;
  margin-top: 45px;
  @media screen and ${({ theme }) => theme.devices.md} {
    margin-top: 95px;
  }
`);

export const IndicatorWrapper = withTheme(styled.div`
  position: absolute;
  bottom: 45px;
  right: calc(50% - 45px);
`);

export const Wrapper = withTheme(styled.div`
  position: relative;
  height: 100%;
`);


export const Content = withTheme(styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 350px;
  justify-content: space-evenly;
`);


