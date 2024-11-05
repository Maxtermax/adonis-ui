import { withTheme } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = withTheme(styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacing.calc(4)};
  gap: ${({ theme }) => theme.spacing.calc(4)};
  width: 100%;
`);
