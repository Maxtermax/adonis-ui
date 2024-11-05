import { withTheme } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = withTheme(styled.div`
  background: ${({ theme }) => theme.colors.primary};
  display: grid;
  margin-top: 20px;
  justify-content: center;
  padding-bottom: 40px;
  padding-top: 40px;
  flex-direction: column;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 30px;
  height: max-content;
  gap: ${({ theme }) => theme.spacing.calc(10)};
  & .ad-text {
    color: ${({ theme }) => theme.colors.contrast.primary};
    text-transform: uppercase;
    text-align: left;
  }
`);

export const List = withTheme(styled.ul`
  display: flex;
  padding: 0px;
  margin: 0px;
  justify-content: center;
  @media screen and ${({ theme }) => theme.devices.sm} {
    padding-left: 40px;
  }
`);

export const Item = withTheme(styled.li`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.calc(5)};
  & a {
    color: ${({ theme }) => theme.colors.contrast.primary};
    text-align: left;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`);

export const Trademark = withTheme(styled.div`
  align-items: center;
  display: flex;
  width: 100%;
  justify-content: center;
`);

