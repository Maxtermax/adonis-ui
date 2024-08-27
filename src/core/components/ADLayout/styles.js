import { withTheme } from "@emotion/react";
import styled from "@emotion/styled";

export const Header = withTheme(styled.header`
  align-items: center;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.contrast.primary};
  display: grid;
  grid-template-columns: 350px 1fr 350px;
  padding-left: ${({ theme }) => theme.spacing.calc(10)};
  padding-right: ${({ theme }) => theme.spacing.calc(10)};
  justify-content: space-between;
  & .ad-text-subtitle {
    color: ${({ theme }) => theme.colors.contrast.primary};
  }
`);

export const Container = withTheme(styled.div`
  align-content: stretch;
  display: grid;
  grid-template-rows: 60px auto 100px;
  height: 100dvh;
`);

export const BurguerMenu = withTheme(styled.button`
  display: flex;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.contrast.primary};
`);

export const Icon = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
`;

export const Center = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const Item = styled.li`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const List = styled.ul`
  display: flex;
  padding: 0px;
  list-style-type: none;
  margin: 0;
  padding: 0;
  justify-content: space-evenly;
`;
