import { withTheme } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = withTheme(styled.div`
  align-items: flex-start;
  display: flex;
  min-height: 500px;
  flex-direction: column;
  display: flex
  gap: ${({ theme }) => theme.spacing.calc(2)};
  width: 100%;
  height: 100%;
`);
