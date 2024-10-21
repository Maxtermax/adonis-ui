import { withTheme } from "@emotion/react";
import styled from "@emotion/styled";

export const Item = withTheme(styled.li`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  z-index: 2;
  & .ad-button {
    color: ${({ theme }) => theme.colors.contrast.primary};
    background: ${({ isSelected, theme }) =>
      isSelected ? theme.colors.contrast.primary : theme.colors.primary};
  }
  & .ad-button .ad-text {
    text-transform: uppercase;
    color: ${({ isSelected, theme }) =>
      isSelected ? theme.colors.primary : theme.colors.contrast.primary};
  }
  & .ad-button:hover {
    background: ${({ theme }) => theme.colors.contrast.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
  & .ad-button:hover .ad-text {
    color: ${({ theme }) => theme.colors.primary};
  }
  & .ad-card:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`);