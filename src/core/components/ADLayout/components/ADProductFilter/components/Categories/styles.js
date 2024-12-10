import { withTheme } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = withTheme(styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacing.calc(4)};
  gap: ${({ theme }) => theme.spacing.calc(4)};
  width: 100%;
  height: 100%;
  & .__content {
    overflow-y: auto;
    &::-webkit-scrollbar: {
      width: 3px;
    };
    &::-webkit-scrollbar-track: {
      background-color: transparent;
    };
    &::-webkit-scrollbar-thumb: {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
`);
