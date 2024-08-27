import styled from "@emotion/styled";
import { withTheme } from "@emotion/react";

export const Container = withTheme(styled.div`
  align-items: center;
  border: 1px solid red;
  display: flex;
  height: fit-content;
  width: 100%;
  justify-content: center;
  overflow-x: auto;
  max-width: ${({ width, theme }) => width ?? theme.breakpoints.lg};
`);

export const Content = withTheme(styled.div`
  align-items: center;
  border: 1px solid green;
  display: flex;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.medium};
  justify-content: center;
`);
