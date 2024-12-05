import { withTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { animations } from "ADProvider";

export const Thumbnail = withTheme(styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  background: rgba(0, 0, 0, 0.02);
`);

export const Item = withTheme(styled.li`
  list-style: none;
  width: 100%;
`);

export const SizesWrapper = withTheme(styled.div`
  margin-top: ${({ theme }) => theme.spacing.calc(1)};
  & .ad-button {
    width: 100%;
    min-width: 35px;
    height: 30px;
    padding: 0px;
  }
`);

export const Wrapper = withTheme(styled.a`
  background-color: ${({ theme }) => theme.colors.smoke};
  border-radius: ${({ theme }) => theme.border.radius.rounded};
  border: 1px solid ${({ theme }) => theme.colors.smoke};
  padding: ${({ theme }) => theme.spacing.calc(4)};
  width: calc(100% - ${({ theme }) => theme.spacing.calc(8)});
  height: 100%;
  text-decoration: none;
  transition: ${({ theme }) => theme.transitions.quick};
  display: flex;
  grid-template-columns: 60px 1fr;
  gap: ${({ theme }) => theme.spacing.calc(2)};
  justify-items: start;
  align-items: center;
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`);
