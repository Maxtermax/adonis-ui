import { withTheme } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = withTheme(styled.div`
  display: flex;
  overflow: auto;
  scroll-snap-type: x mandatory;
  &::-webkit-scrollbar {
    height: 2px;
  }
  &::-webkit-scrollbar-track {
    backgroundcolor: transparent;
  }
  &::-webkit-scrollbar-thumb {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`);

export const Image = withTheme(styled.img`
  scroll-snap-align: start;
  object-fit: contain; 
  cursor: zoom-in;
  width: 100%;
  height: 250px;
  flex-shrink: 0;
`);

export const Indicator = withTheme(styled.div`
  align-items: center;
  display: flex;
  position: absolute;
  justify-content: center;
  bottom: 10px;
  width: 100%;
`);

export const Footer = withTheme(styled.div`
  display: flex;
  padding: ${({ theme }) => theme.spacing.calc(3)};
  gap: ${({ theme }) => theme.spacing.calc(1)};
  flex-direction: column;
`);

export const Button = withTheme(styled.div`
  margin-top: ${({ theme }) => theme.spacing.calc(1)};
  margin-bottom: ${({ theme }) => theme.spacing.calc(1)};
  button {
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    background: transparent;
    width: 100%;
  }
  button:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`);
