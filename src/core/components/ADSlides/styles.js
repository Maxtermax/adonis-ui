import { withTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { animations } from "ADProvider";

export const Container = withTheme(styled.div`
  display: flex;
  position: relative;
  margin: 0px auto;
  width: 100%;
  height: 100%;
  min-height: 500px;
  min-width: 400px;
`);

export const Item = withTheme(styled.div`
  align-items: center;
  background-image: url(${({ image = "" }) => image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  width: 0px;
  flex-grow: ${({ isSelected }) => (isSelected ? 1 : 0)};
  transition: ${({ theme }) => theme.transitions.smooth};
`);

export const Link = withTheme(styled.a`
  display: block;
  text-decoration: none;
  margin-bottom: 70px;
`);
